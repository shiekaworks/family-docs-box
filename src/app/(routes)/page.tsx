'use client';
import { useState } from 'react';
import Image from 'next/image';
import profile from '@/app/_assets/images/Profile.png';
import home from '@/app/_assets/images/home.png';
import fam from '@/app/_assets/images/fam.png';
import settings from '@/app/_assets/images/settings.png';
import { poppins } from '@/app/_assets/fonts';
import logOut from '@/app/_assets/images/logout-icon.png';
import docs from '@/app/_assets/images/Documents 1.png';
import arrow from '@/app/_assets/images/arrow_back.png';
import action_1 from '@/app/_assets/images/action_1.png';
import action_2 from '@/app/_assets/images/action_2.png';
import action_3 from '@/app/_assets/images/action_3.png';
import upload from '@/app/_assets/images/upload_icon.png';
import xIcon from '@/app/_assets/images/x.png';
import arrow_down from '@/app/_assets/images/arrow_down.png';
import { Dropdown } from '@/app/_components/Dropdown';
import Share from './share/page';

export default function Profile() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 bg-custom-gradient">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/5 bg-white py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 rounded-3xl">
          <div className="w-full mb-8 border-b border-[#C6C6C6]">
            <Image
              src="https://dummyimage.com/70x70/000/ffffff"
              alt="Landscape picture"
              width={70}
              height={70}
              className="rounded-full mb-8 mx-auto"
            />
          </div>
          <div className="text-center mb-10">
            <Image
              src={profile}
              alt="profile"
              width={150}
              height={150}
              className="rounded-full mb-6 mx-auto"
            />
            <p className="text-lg md:text-xl font-bold">Jane Doe</p>
            <p className="text-[#939393] text-xs">ACCOUNT OWNER</p>
          </div>
          <ul className="mb-20">
            <li className="mb-6">
              <div
                className={`flex gap-3 text-base md:text-lg ${poppins.className}`}
              >
                <span>
                  <Image src={home} alt="profile" width={24} height={24} />
                </span>
                <p>Home</p>
              </div>
            </li>
            <li className="mb-6">
              <div
                className={`flex gap-3 text-base md:text-lg ${poppins.className}`}
              >
                <span>
                  <Image src={fam} alt="profile" width={24} height={24} />
                </span>
                <p>Family</p>
              </div>
            </li>
            <li>
              <div
                className={`flex gap-3 text-base md:text-lg ${poppins.className}`}
              >
                <span>
                  <Image src={settings} alt="profile" width={24} height={24} />
                </span>
                <p>Profile Settings</p>
              </div>
            </li>
          </ul>
          <div className="flex cursor-pointer items-center mt-[277px]">
            <div className="rounded-2xl h-8 w-8 p-1 mr-3">
              <Image
                src={logOut}
                alt="Landscape picture"
                width={30}
                height={30}
              />
            </div>
            <p className="pt-1 text-sm">Logout</p>
          </div>
        </div>
        <div className="w-full md:w-4/5 bg-white py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 rounded-3xl">
          <div className="flex gap-4 items-center mb-6">
            <Image src={arrow} alt="Landscape picture" width={52} height={52} />
            <Image src={docs} alt="Landscape picture" width={52} height={45} />
            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-[#222222]">
              HOME
            </h2>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            {/* Upload Section */}
            <div className="rounded-lg flex flex-col gap-8">
              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="2xl:max-w-[472px] md:w-1/2">
                  <div className="bg-[#EEEEEE] h-60 border border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center">
                    <div className="text-center">
                      <input type="file" className="hidden" id="file-upload" />
                      <div className="bg-[#D9D9D9] rounded-full w-12 h-12 mx-auto pt-4">
                        <Image
                          src={upload}
                          alt="Landscape picture"
                          width={24}
                          height={24}
                          className="mx-auto"
                        />
                      </div>
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-[#006EBD] hover:underline"
                      >
                        Click here
                      </label>
                      &nbsp;to upload your file or drag and drop.
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    Filename.png <span className="text-[#C7C7C7]">(60KB)</span>
                  </p>
                </div>

                <div className="flex-grow md:w-1/2">
                  <div className="space-y-4 mt-4">
                    <div className="flex gap-4">
                      <div className="w-full">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Family key"
                            className="w-full border border-gray-300 rounded-3xl h-16 p-4"
                          />
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer items-center">
                            <Image
                              src={xIcon}
                              alt="reset"
                              width={12}
                              height={16}
                              className="mr-2"
                            />

                            <svg
                              id="eyeIcon"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-[#C7C7C7]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </div>
                        </div>

                        <p className="text-[#006EBD] dark:text-blue-500 underline text-right cursor-pointer">
                          Get family key here
                        </p>
                      </div>
                      <div className=" w-full">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Select tag"
                            className="w-full border border-gray-300 rounded-3xl h-16 p-4"
                          />
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                            <Image
                              src={xIcon}
                              alt="reset"
                              width={13}
                              height={16}
                              className="mr-2"
                            />
                            <span
                              className="my-[13px]"
                              style={{
                                alignSelf: 'stretch',
                                width: '1px',
                                backgroundColor: '#E2E2E2',
                              }}
                            ></span>
                            <Image
                              src={arrow_down}
                              alt="reset"
                              width={10}
                              height={5}
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <textarea
                      placeholder="Notes"
                      className="w-full border border-gray-300 rounded-3xl h-32 p-4"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="w-full relative text-right mt-4">
                <button className="bg-[#006EBD] text-white rounded-3xl px-6 py-3 w-[200px]">
                  Upload
                </button>
              </div>
              {/* Table Section */}
              <div className="mt-8">
                <div className="mb-2 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="w-full md:w-1/2">
                    <select
                      name="items-per-page"
                      className="border border-gray-300 rounded-3xl p-3 px-5 w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-[279px]"
                    >
                      <option>25 items per page</option>
                      <option>50 items per page</option>
                      <option>100 items per page</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/2 text-right">
                    <input
                      type="text"
                      placeholder="Search Files"
                      className="border border-gray-300 rounded-3xl h-16 w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-[400px] mx-auto p-5"
                    />
                  </div>
                </div>
                <div className="overflow-x-auto rounded-lg">
                  <table className="min-w-full bg-white shadow-md">
                    <thead>
                      <tr className="bg-[#006EBD] text-white">
                        <th className="py-3 px-4 text-left">File Name</th>
                        <th className="py-3 px-4 text-left">Last Updated</th>
                        <th className="py-3 px-4 text-left">Key Date</th>
                        <th className="py-3 px-4 text-left">Uploaded By</th>
                        <th className="py-3 px-4 text-left">Tags</th>
                        <th className="py-3 px-4 text-left">Notes</th>
                        <th className="py-3 px-4 text-left">Modify</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b odd:bg-white even:bg-[#F3F3F3]">
                        <td className="py-3 px-4">Filename.png</td>
                        <td className="py-3 px-4">08-1-24 01:00 PM</td>
                        <td className="py-3 px-4">July 29, 2024</td>
                        <td className="py-3 px-4">Scott</td>
                        <td className="py-3 px-4">tag1, tag2, tag3</td>
                        <td className="py-3 px-4">
                          <button className="bg-[#044F85] text-white rounded-3xl px-4 py-2">
                            Show Notes
                          </button>
                        </td>
                        <td className="py-3 px-4 flex space-x-2">
                          <div className="flex gap-3 items-center">
                            <div className="border-r border-[#C7C7C7] pr-2">
                              <Image
                                src={action_1}
                                alt="action_1"
                                width={15}
                                height={15}
                                className="cursor-pointer"
                              />
                            </div>
                            <div className="border-r border-[#C7C7C7] pr-2">
                              <Image
                                src={action_2}
                                alt="action_2"
                                width={15}
                                height={15}
                                className="cursor-pointer"
                              />
                            </div>
                            <div>
                              <Image
                                src={action_3}
                                alt="action_3"
                                width={15}
                                height={16}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Dropdown>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              View
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Download
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsShareModalOpen(true)}
                            >
                              Share
                            </a>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr className="border-b odd:bg-white even:bg-[#F3F3F3]">
                        <td className="py-3 px-4">Filename.png</td>
                        <td className="py-3 px-4">08-1-24 01:00 PM</td>
                        <td className="py-3 px-4">July 29, 2024</td>
                        <td className="py-3 px-4">Scott</td>
                        <td className="py-3 px-4">tag1, tag2, tag3</td>
                        <td className="py-3 px-4">
                          <button className="bg-[#044F85] text-white rounded-3xl px-4 py-2">
                            Show Notes
                          </button>
                        </td>
                        <td className="py-3 px-4 flex space-x-2">
                          <div className="flex gap-3 items-center">
                            <div className="border-r border-[#C7C7C7] pr-2">
                              <Image
                                src={action_1}
                                alt="action_1"
                                width={15}
                                height={15}
                                className="cursor-pointer"
                              />
                            </div>
                            <div className="border-r border-[#C7C7C7] pr-2">
                              <Image
                                src={action_2}
                                alt="action_2"
                                width={15}
                                height={15}
                                className="cursor-pointer"
                              />
                            </div>
                            <div>
                              <Image
                                src={action_3}
                                alt="action_3"
                                width={15}
                                height={16}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Dropdown>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              View
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Download
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                <button className="h-8 w-8 p-1 rounded-lg mr-2">Prev</button>
                <button className="bg-[#006EBD] text-white h-8 w-8 p-1 rounded-lg">
                  1
                </button>
                <button className="h-8 w-8 pt-1 rounded-lg">2</button>
                <button className="h-8 w-8 p-1 rounded-lg">3</button>
                <button className="h-8 w-8 p-1 rounded-lg">Next</button>
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
