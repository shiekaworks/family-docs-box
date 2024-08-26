'use client';

import { useState, useMemo, useCallback } from 'react';
import RemoveIcon from '@/app/_assets/icons/x.svg';
import Camera from '@/app/_assets/icons/camera.svg';
import Edit from '@/app/_assets/icons/action_1.svg';
import Delete from '@/app/_assets/icons/action_3.svg';
import Upload from '@/app/_assets/icons/upload.svg';
import Search from '@/app/_assets/icons/search.svg';
import { Dropdown as DropdownAction } from '@/app/_components/Dropdown';
import Share from './_share/page';
import { Select, SelectItem } from '@nextui-org/select';
import { Sidebar } from '../_components/Sidebar';
import ViewNoteModal from './_home-view-note/page';
import DeleteConfirmationModal from './_home-delete-confirmation/page';
import EditModal from './_home-edit/page';
import ViewHintModal from './_home-hint/page';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/table';
import { Button } from '@nextui-org/button';
import { Pagination } from '@nextui-org/pagination';
import { columns, files } from './data';
import { MultipleSelect } from '../_components/MuiltiSelect';

type SortDescriptor = {
  column: React.Key;
  direction: 'ascending' | 'descending';
};
type Selection = 'all' | Set<React.Key>;

export default function Home() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showFamilyKey, setShowFamilyKey] = useState(false);
  const [isViewNoteModalOpen, setIsViewNoteModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewHintModalOpen, setIsViewHintModalOpen] = useState(false);
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(['25']);

  const handleSelectionChange = (keys: string) => {
    setSelectedItemsPerPage([keys]);
  };

  const INITIAL_VISIBLE_COLUMNS = [
    'filename',
    'last_updated',
    'key_date',
    'uploaded_by',
    'tags',
    'notes',
    'modify',
    'actions',
  ];

  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [sortDescriptor, setSortDescriptor] = useState<any>({
    column: '',
    direction: '',
  });
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...files];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.filename.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [files, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: any, b: any) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'notes':
        return (
          <div className="flex sm:justify-start justify-center items-center">
            <button
              onClick={() => setIsViewNoteModalOpen(!isViewNoteModalOpen)}
              className="bg-[#044F85] text-white rounded-3xl px-3 py-2 mx-auto"
            >
              Show Notes
            </button>
          </div>
        );
      case 'modify':
        return (
          <div className="flex gap-3 items-center justify-center">
            <div className="flex border-r border-[#C7C7C7] lg:pr-2 pr-0 items-center sm:mb-0">
              <Edit
                className="cursor-pointer"
                onClick={() => setIsEditModalOpen(!isEditModalOpen)}
              />
            </div>
            <div className="flex items-center">
              <Delete
                className="cursor-pointer"
                onClick={() => setIsDeleteModalOpen(true)}
              />
            </div>
          </div>
        );
      case 'actions':
        return (
          <DropdownAction>
            <a
              href="/view-file"
              target="_blank"
              className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
            >
              View
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
            >
              Download
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsShareModalOpen(true)}
            >
              Share
            </a>
          </DropdownAction>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e: any) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
    handleSelectionChange(e.target.value);
  }, []);

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex justify-between items-center gap-2">
        <div className="w-full md:w-1/4">
          <Select
            aria-label="Items per page"
            className="max-w-xs bg-white"
            selectedKeys={selectedItemsPerPage}
            onChange={(keys) => onRowsPerPageChange(keys)}
          >
            <SelectItem key="25">25 items per page</SelectItem>
            <SelectItem key="50">50 items per page</SelectItem>
            <SelectItem key="100">100 items per page</SelectItem>
          </Select>
        </div>
        <div className="w-full md:w-1/3 text-right">
          <div className="relative w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-[400px] 2xl:float-right">
            <input
              type="text"
              placeholder="Search Files"
              className="border border-gray-300 rounded-3xl mx-auto p-3 pl-10 w-full focus:outline-none focus:border-[#006EBD] focus:border-2"
              onChange={(e) => onSearchChange(e.target.value)}
              value={filterValue}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center cursor-pointer">
              <Search className="rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onRowsPerPageChange,
    files.length,
    onSearchChange,
    hasSearchFilter,
    selectedItemsPerPage,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex justify-end items-center">
        <button
          className="h-8 p-1 rounded-lg mr-2"
          disabled={pages === 1}
          onClick={onPreviousPage}
        >
          Prev
        </button>
        <Pagination
          isCompact
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
          classNames={{
            cursor: 'bg-[#006EBD] text-white h-8 w-8 p-1 rounded-lg',
          }}
        />
        <button
          className="h-8 p-1 rounded-lg mr-2"
          disabled={pages === 1}
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const [selected, setSelected] = useState([]);

  const handleSelectChange = (values: any) => {
    setSelected(values);
  };

  return (
    <main className="flex flex-col items-center justify-between p-4 lg:p-2.5 bg-custom-gradient">
      <div className="flex flex-col md:flex-row gap-5 w-full min-h-screen">
        <Sidebar />
        <div className="w-full md:w-4/5 bg-white p-6 lg:py-8 lg:px-8 rounded-3xl">
          <div className="flex gap-4 items-center mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#222222]">
              HOME
            </h2>
          </div>
          <div>
            {/* Upload Section */}
            <div className="rounded-lg flex flex-col gap-2">
              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="2xl:max-w-[472px] md:w-1/3">
                  <div className="bg-[#EEEEEE] h-60 border border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center">
                    <div className="text-center">
                      <input type="file" className="hidden" id="file-upload" />
                      <div className="bg-[#D9D9D9] rounded-full w-12 h-12 mx-auto mb-5 py-2.5">
                        <Upload className="mx-auto hidden md:block" />
                        <Camera className="mx-auto block md:hidden" />
                      </div>
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-[#006EBD] hover:underline"
                      >
                        Click here
                      </label>
                      &nbsp;to upload your file
                      <br />
                      or drag and drop.
                    </div>
                  </div>
                  <p className="text-base mt-2">
                    Filename.png <span className="text-[#C7C7C7]">(60KB)</span>
                  </p>
                </div>

                <div className="flex-grow md:w-1/2">
                  <div className="space-y-4 mt-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <div className="relative">
                          <input
                            type={showFamilyKey ? 'text' : 'password'}
                            placeholder="Family key"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-3 focus:outline-none focus:border-[#006EBD] focus:border-2"
                          />
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                            <RemoveIcon className="mr-2" />
                            <svg
                              id="eyeIcon"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-[#C7C7C7]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              onClick={() => setShowFamilyKey(!showFamilyKey)}
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </div>
                        </div>
                        <p
                          className="text-[#006EBD] dark:text-blue-500 underline text-right cursor-pointer pr-4"
                          onClick={() =>
                            setIsViewHintModalOpen(!isViewHintModalOpen)
                          }
                        >
                          Hint
                        </p>
                      </div>
                      <div className="w-full relative">
                        <MultipleSelect
                          value={selected}
                          options={[
                            { value: 'tag1', label: 'Tag 1' },
                            { value: 'tag2', label: 'Tag 2' },
                            { value: 'tag3', label: 'Tag 3' },
                          ]}
                          isMulti
                          onChange={handleSelectChange}
                        />
                      </div>
                    </div>

                    <textarea
                      placeholder="Notes"
                      className="w-full border border-gray-300 rounded-3xl h-32 p-4 focus:outline-none focus:border-[#006EBD] focus:border-2"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="w-full relative text-right">
                <button className="bg-[#006EBD] text-white rounded-3xl px-6 py-3 w-[200px]">
                  Upload
                </button>
              </div>
              {/* Table Section */}
              <Table
                aria-label="Files table"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                classNames={{
                  wrapper: 'overflow-x-auto rounded-lg p-0 gap-1',
                  table:
                    'bg-white min-w-[995px] md:min-w-full table-fixed text-[14px]',
                  th: 'bg-[#006EBD] text-white [&_th]:p-3 font-bold text-[14px] text-center',
                  td: 'text-[14px]',
                  thead: '[&_th]:p-3 rounded-none',
                  tr: 'border-b odd:bg-white even:bg-[#F3F3F3] [&_td]:p-3 rounded-none',
                }}
                selectedKeys={selectedKeys}
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
                layout="fixed"
                isStriped
              >
                <TableHeader columns={headerColumns}>
                  {(column) => (
                    <TableColumn
                      key={column.uid}
                      align={
                        column.uid === 'uploaded_by' || column.uid === 'actions'
                          ? 'center'
                          : 'start'
                      }
                      allowsSorting={column.sortable}
                      className={column.classname}
                    >
                      {column.name}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody emptyContent={'No files found'} items={sortedItems}>
                  {(item) => (
                    <TableRow key={item.filename}>
                      {(columnKey) => (
                        <TableCell>{renderCell(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {isShareModalOpen && (
        <Share
          isModalOpen={isShareModalOpen}
          setIsModalOpen={setIsShareModalOpen}
        />
      )}
      {isViewNoteModalOpen && (
        <ViewNoteModal
          isModalOpen={isViewNoteModalOpen}
          setIsModalOpen={setIsViewNoteModalOpen}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isModalOpen={isDeleteModalOpen}
          setIsModalOpen={setIsDeleteModalOpen}
        />
      )}
      {isEditModalOpen && (
        <EditModal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
        />
      )}
      {isViewHintModalOpen && (
        <ViewHintModal
          isModalOpen={isViewHintModalOpen}
          setIsModalOpen={setIsViewHintModalOpen}
        />
      )}
    </main>
  );
}
