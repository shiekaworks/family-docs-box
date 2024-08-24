'use client';
import { useState } from 'react';
import Docs from '@/app/_assets/icons/Documents 1.svg';
import RemoveIcon from '@/app/_assets/icons/x.svg';
import Edit from '@/app/_assets/icons/action_1.svg';
import Update from '@/app/_assets/icons/action_2.svg';
import Delete from '@/app/_assets/icons/action_3.svg';
import Upload from '@/app/_assets/icons/upload.svg';
import Search from '@/app/_assets/icons/search.svg';
import { Dropdown } from '@/app/_components/Dropdown';
import Share from './_share/page';
import { Select, SelectItem } from '@nextui-org/select';
import { Sidebar } from '../_components/Sidebar';
import ViewNoteModal from './_home-view-note/page';
import DeleteConfirmationModal from './_home-delete-confirmation/page';
import EditModal from './_home-edit/page';

export default function Home() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showFamilyKey, setShowFamilyKey] = useState(false);
  const [isViewNoteModalOpen, setIsViewNoteModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(['25']);

  const handleSelectionChange = (keys: string) => {
    setSelectedItemsPerPage([keys]);
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
                        <Upload className="mx-auto" />
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
                        <p className="text-[#006EBD] dark:text-blue-500 underline text-right cursor-pointer pr-4">
                          Get family key here
                        </p>
                      </div>
                      <div className="w-full relative h-[44px] bg-white">
                        <Select
                          aria-label="Select tag"
                          placeholder="Select tag"
                          selectionMode="multiple"
                          className="w-full"
                        >
                          <SelectItem key={1}>Tag 1</SelectItem>
                          <SelectItem key={2}>Tag 2</SelectItem>
                          <SelectItem key={3}>Tag 3</SelectItem>
                        </Select>
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
              <div className="mt-2">
                <div className="mb-2 flex justify-between items-center gap-2">
                  <div className="w-full md:w-1/4">
                    <Select
                      aria-label="Pagination"
                      className="max-w-xs bg-white"
                      selectedKeys={selectedItemsPerPage}
                      onChange={(keys) =>
                        handleSelectionChange(keys.target.value)
                      }
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
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center cursor-pointer">
                        <Search className="rounded-full mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-lg">
                  <table className=" bg-white shadow-md min-w-[995px] table-fixed">
                    <thead>
                      <tr className="bg-[#006EBD] text-white">
                        <th className="py-3 px-3 text-left w-[130px]">
                          File Name
                        </th>
                        <th className="py-3 px-3 text-right  w-[162px]">
                          Last Updated
                        </th>
                        <th className="py-3 px-3 text-right  w-[126px]">
                          Key Date
                        </th>
                        <th className="py-3 px-2 text-center  w-[109px]">
                          Uploaded By
                        </th>
                        <th className="py-3 px-3 text-center  w-[147px]">
                          Tags
                        </th>
                        <th className="py-3 px-3 text-center  w-[145px]">
                          Notes
                        </th>
                        <th className="py-3 px-3 text-center  w-[96px]">
                          Modify
                        </th>
                        <th className="py-3 px-3 text-center  w-[78px]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b odd:bg-white even:bg-[#F3F3F3]">
                        <td className="py-3 px-4">Filename.png</td>
                        <td className="py-3 px-4 text-right">
                          08-1-24 01:00 PM
                        </td>
                        <td className="py-3 px-4 text-right">July 29, 2024</td>
                        <td className="py-3 px-4 text-center">Scott</td>
                        <td className="py-3 px-4 text-center">
                          tag1, tag2, tag3
                        </td>
                        <td className="py-3 px-4 flex sm:justify-start justify-center items-center">
                          <button
                            onClick={() =>
                              setIsViewNoteModalOpen(!isViewNoteModalOpen)
                            }
                            className="bg-[#044F85] text-white rounded-3xl px-3 py-2 mx-auto"
                          >
                            Show Notes
                          </button>
                        </td>

                        <td className="py-3 px-4">
                          <div className="flex gap-3 items-center justify-center">
                            <div className="flex border-r border-[#C7C7C7] lg:pr-2 pr-0 items-center sm:mb-0">
                              <Edit
                                className="cursor-pointer"
                                onClick={() =>
                                  setIsEditModalOpen(!isEditModalOpen)
                                }
                              />
                            </div>
                            <div className="flex items-center">
                              <Delete
                                className="cursor-pointer"
                                onClick={() => setIsDeleteModalOpen(true)}
                              />
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <Dropdown>
                            <a
                              href="#"
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
                          </Dropdown>
                        </td>
                      </tr>
                      <tr className="border-b odd:bg-white even:bg-[#F3F3F3]">
                        <td className="py-3 px-4">Filename.png</td>
                        <td className="py-3 px-4 text-right">
                          08-1-24 01:00 PM
                        </td>
                        <td className="py-3 px-4 text-right">July 29, 2024</td>
                        <td className="py-3 px-4 text-center">Scott</td>
                        <td className="py-3 px-4 text-center">
                          tag1, tag2, tag3
                        </td>
                        <td className="py-3 px-4 flex sm:justify-start justify-center items-center">
                          <button
                            onClick={() =>
                              setIsViewNoteModalOpen(!isViewNoteModalOpen)
                            }
                            className="bg-[#044F85] text-white rounded-3xl px-3 py-2 mx-auto"
                          >
                            Show Notes
                          </button>
                        </td>

                        <td className="py-3 px-4">
                          <div className="flex gap-3 items-center justify-center">
                            <div className="flex border-r border-[#C7C7C7] lg:pr-2 pr-0 items-center sm:mb-0">
                              <Edit
                                className="cursor-pointer"
                                onClick={() =>
                                  setIsEditModalOpen(!isEditModalOpen)
                                }
                              />
                            </div>
                            <div className="flex items-center">
                              <Delete
                                className="cursor-pointer"
                                onClick={() => setIsDeleteModalOpen(true)}
                              />
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <Dropdown>
                            <a
                              href="#"
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
                          </Dropdown>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center mt-4">
              <div className="flex space-x-2">
                <button className="h-8 p-1 rounded-lg mr-2">Prev</button>
                <button className="bg-[#006EBD] text-white h-8 w-8 p-1 rounded-lg">
                  1
                </button>
                <button className="h-8 w-8 pt-1 rounded-lg">2</button>
                <button className="h-8 w-8 p-1 rounded-lg">3</button>
                <button className="h-8 p-1 rounded-lg">Next</button>
              </div>
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
    </main>
  );
}
