'use client';
import { useState } from 'react';
import Image from 'next/image';
import arrow from '@/app/_assets/images/arrow_back.png';
import upload from '@/app/_assets/images/upload_icon.png';
import user_profile from '@/app/_assets/images/user_profile.png';
import user1 from '@/app/_assets/images/user 1.png';
import Share from '../_share/page';
import { Sidebar } from '@/app/_components/Sidebar';

export default function Profile() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-2.5 bg-custom-gradient">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <Sidebar />
        <div className="w-full md:w-4/5 bg-white py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 rounded-3xl">
          <div className="flex gap-4 items-center mb-6">
            {/* <Image src={arrow} alt="Landscape picture" width={52} height={52} />
            <Image src={user1} alt="Landscape picture" width={52} height={52} /> */}
            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-[#222222]">
              FAMILY
            </h2>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <div className="rounded-lg flex flex-col gap-8">
              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="pt-[32px] 2xl:pl-[135px] md:pl-5">
                  <div className="mb-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <div>
                        <label className="pl-4">Family name</label>
                        <input
                          type="text"
                          placeholder="Enter family name"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                        />

                        <div className="flex gap-2">
                          <button className="text-[#006EBD] text-sm underline">
                            Edit
                          </button>

                          <button className="text-[#006EBD] text-sm underline">
                            Apply
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="pl-4">Head of the household</label>
                        <input
                          type="email"
                          placeholder="Head of the household email"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <p className="pl-4">Members:</p>
                      <p>Member 1 email goes here</p>
                      <p>Member 2 email goes here</p>
                      <p>Member 3 email goes here</p>
                      <p>Member 4 email goes here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative text-right lg:mt-[242px] mt-6">
              <button className="bg-[#5AAE72] text-white rounded-3xl px-6 py-3 w-[200px] mr-5">
                Invite member
              </button>
              <button className="bg-[#006EBD] text-white rounded-3xl px-6 py-3 w-[200px]">
                Change password
              </button>
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
