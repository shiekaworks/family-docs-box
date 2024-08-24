'use client';
import { useState } from 'react';
import ArrowLeft from '@/app/_assets/icons/arrow_left.svg';
import ChangeFamilyKeyModal from '../_family-change-family-key/page';
import InviteMemberModal from '../_family-invite-member/page';
import { Sidebar } from '@/app/_components/Sidebar';
import { poppins } from '@/app/_assets/fonts';

export default function Family() {
  const [isChangePwModalOpen, setIsChangePwModalOpen] = useState(false);
  const [isInviteMemberModalOpen, setIsInviteMemberModalOpen] = useState(false);
  const [isDisableFamilyName, setIsDisableFamilyName] = useState(true);
  const [familyName, setFamilyName] = useState('Doe Family');

  return (
    <main className="flex flex-col items-center justify-between p-4 lg:p-2.5 bg-custom-gradient">
      <div className="flex flex-col md:flex-row gap-5 w-full min-h-screen">
        <Sidebar />
        <div className="w-full md:w-4/5 bg-white p-6 lg:py-8 lg:px-8 rounded-3xl">
          <div className="flex gap-4 items-center mb-6">
            <a href="/" className="w-6">
              <ArrowLeft />
            </a>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#222222]">
              FAMILY
            </h2>
          </div>
          <div>
            <div className="rounded-lg flex flex-col gap-8">
              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="pt-5 lg:pt-[32px]">
                  <div className="grid grid-cols-1 lg:grid-cols-[65%_31%] gap-10">
                    <div className="mb-5">
                      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 mb-10 md:mb-0">
                        <div className="mb-3 lg:mb-10">
                          <label className="pl-4">Family name</label>
                          <input
                            type="text"
                            placeholder="Enter family name"
                            className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2 mb-2"
                            value={familyName}
                            disabled={isDisableFamilyName}
                            onChange={(e) => setFamilyName(e.target.value)}
                          />

                          <div className="flex gap-2 pl-4">
                            {isDisableFamilyName ? (
                              <button
                                className="text-[#006EBD] dark:text-blue-500 focus:underline text-right cursor-pointer text-base"
                                onClick={() => setIsDisableFamilyName(false)}
                              >
                                Edit
                              </button>
                            ) : (
                              <>
                                <button
                                  className="text-[#006EBD] dark:text-blue-500 focus:underline text-right cursor-pointer text-base"
                                  onClick={() => {
                                    setFamilyName('Doe Family');
                                    setIsDisableFamilyName(true);
                                  }}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="text-[#006EBD] dark:text-blue-500 focus:underline text-right cursor-pointer text-base"
                                  onClick={() => setIsDisableFamilyName(true)}
                                >
                                  Apply
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="mb-5 lg:mb-0">
                          <label className="pl-4">Head of the household</label>
                          <input
                            type="email"
                            placeholder="janedoe@gmail.com"
                            className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-base focus:outline-none focus:border-[#006EBD] focus:border-2"
                            disabled
                          />
                        </div>
                      </div>

                      <div>
                        <h3
                          className={`${poppins.className} font-bold mb-5 text-2xl`}
                        >
                          Family Members
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-4 bg-[#e3eff8] rounded-md">
                            <span>member1@example.com</span>
                            <button className="text-[#006EBD] dark:text-blue-500">
                              Remove
                            </button>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-[#e3eff8] rounded-md">
                            <span>member2@example.com</span>
                            <button className="text-[#006EBD] dark:text-blue-500">
                              Remove
                            </button>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-[#e3eff8] rounded-md">
                            <span>member3@example.com</span>
                            <button className="text-[#006EBD] dark:text-blue-500">
                              Remove
                            </button>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-[#e3eff8] rounded-md">
                            <span>member4@example.com</span>
                            <button className="text-[#006EBD] dark:text-blue-500">
                              Remove
                            </button>
                          </div>

                          <div className="flex justify-between items-center p-4 bg-[#e3eff8] rounded-md">
                            <span>member5@example.com</span>
                            <button className="text-[#006EBD] dark:text-blue-500">
                              Remove
                            </button>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-[#e3eff8] rounded-md">
                            <span>member6@example.com</span>
                            <button className="text-[#006EBD] dark:text-blue-500">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${poppins.className}`}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
                        Plan Subscription
                      </h2>
                      <div className="bg-[#006ebd] text-white rounded-3xl py-5 px-3 text-center">
                        <p className="text-white text-xl mb-3">
                          You are subscribed to
                        </p>
                        <p className="mb-1 text-white text-2xl lg:text-4xl font-bold">
                          JUST THE <br /> TWO OF US
                        </p>
                        <a
                          href="/select-plan"
                          className="text-[#8dc2ea] text-base"
                        >
                          Upgrade subscription
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative text-right lg:mt-[242px] mt-6">
              <button
                className="bg-[#5AAE72] text-white rounded-3xl px-6 py-3 w-full md:w-[200px] lg:mr-5 lg:mb-0 mb-5"
                onClick={() =>
                  setIsInviteMemberModalOpen(!isInviteMemberModalOpen)
                }
              >
                Invite member
              </button>
              <button
                className="bg-[#006EBD] text-white rounded-3xl px-6 py-3 w-full md:w-[200px]"
                onClick={() => setIsChangePwModalOpen(true)}
              >
                Change Family key
              </button>
            </div>
          </div>
        </div>
      </div>
      {isChangePwModalOpen && (
        <ChangeFamilyKeyModal
          isModalOpen={isChangePwModalOpen}
          setIsModalOpen={setIsChangePwModalOpen}
        />
      )}
      {isInviteMemberModalOpen && (
        <InviteMemberModal
          isModalOpen={isInviteMemberModalOpen}
          setIsModalOpen={setIsInviteMemberModalOpen}
        />
      )}
    </main>
  );
}
