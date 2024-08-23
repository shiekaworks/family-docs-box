'use client';
import { useState } from 'react';
import Docs from '@/app/_assets/icons/Documents 1.svg';
import ArrowLeft from '@/app/_assets/icons/arrow_left.svg';
import Edit from '@/app/_assets/icons/action_1.svg';
import Update from '@/app/_assets/icons/action_2.svg';
import Delete from '@/app/_assets/icons/action_3.svg';
import Upload from '@/app/_assets/icons/upload.svg';
import Search from '@/app/_assets/icons/search.svg';
import { Dropdown } from '@/app/_components/Dropdown';
import Share from './_share/page';
import { Select, SelectItem } from '@nextui-org/select';
import { Sidebar } from '../_components/Sidebar';
import Image from 'next/image';

export default function Profile() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showFamilyKey, setShowFamilyKey] = useState(false);
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(['25']);

  const handleSelectionChange = (keys: string) => {
    setSelectedItemsPerPage([keys]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-2.5 bg-custom-gradient">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <Sidebar />
        <div className="w-full md:w-4/5 bg-white py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 rounded-3xl">
          <div className="flex gap-4 items-center mb-6">
            <ArrowLeft />
            <Docs />
            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-[#222222]">
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
                  <p className="text-md mt-2">
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
                            <Image
                              alt="reset"
                              loading="lazy"
                              width="12"
                              height="16"
                              decoding="async"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fx.91c45dff.png&amp;w=32&amp;q=75"
                              className="mr-2"
                              style={{ color: 'transparent' }}
                            />
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
                <div className="mb-2 flex flex-col md:flex-row justify-between items-center gap-2">
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
                  <table className="min-w-full bg-white shadow-md">
                    <thead>
                      <tr className="bg-[#006EBD] text-white">
                        <th className="py-3 px-3 text-left">File Name</th>
                        <th className="py-3 px-3 text-right">Last Updated</th>
                        <th className="py-3 px-3 text-right">Key Date</th>
                        <th className="py-3 px-2 text-center">Uploaded By</th>
                        <th className="py-3 px-3 text-center">Tags</th>
                        <th className="py-3 px-3 text-center">Notes</th>
                        <th className="py-3 px-3 text-center">Modify</th>
                        <th className="py-3 px-3 text-center">Actions</th>
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
                          <button className="bg-[#044F85] text-white rounded-3xl px-3 py-2 mx-auto">
                            Show Notes
                          </button>
                        </td>

                        <td className="py-3 px-4">
                          <div className="flex flex-col sm:flex-row gap-3 items-center">
                            <div className="flex border-r border-[#C7C7C7] lg:pr-2 pr-0 items-center sm:mb-0 mb-2">
                              <Edit className="cursor-pointer" />
                            </div>
                            <div className="flex border-r border-[#C7C7C7] lg:pr-2 pr-0 items-center sm:mb-0 mb-2">
                              <Update className="cursor-pointer" />
                            </div>
                            <div className="flex items-center">
                              <Delete className="cursor-pointer" />
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <Dropdown>
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            >
                              View
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            >
                              Download
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
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
                          <button className="bg-[#044F85] text-white rounded-3xl px-3 py-2 mx-auto">
                            Show Notes
                          </button>
                        </td>

                        <td className="py-3 px-4">
                          <div className="flex flex-col sm:flex-row gap-3 items-center">
                            <div className="flex border-r border-[#C7C7C7] lg:pr-2 pr-0 items-center sm:mb-0 mb-2">
                              <Edit className="cursor-pointer" />
                            </div>
                            <div className="flex border-r border-[#C7C7C7] lg:pr-2 pr-0 items-center sm:mb-0 mb-2">
                              <Update className="cursor-pointer" />
                            </div>
                            <div className="flex items-center">
                              <Delete className="cursor-pointer" />
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <Dropdown>
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            >
                              View
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            >
                              Download
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
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
    </main>
  );
}
