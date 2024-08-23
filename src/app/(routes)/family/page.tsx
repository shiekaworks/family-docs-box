"use client";
import { useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/app/_assets/icons/arrow_left.svg";
import upload from "@/app/_assets/images/upload_icon.png";
import user_profile from "@/app/_assets/images/user_profile.png";
import user1 from "@/app/_assets/images/user 1.png";
import ChangePasswordModal from "../_family-change-password/page";
import InviteMemberModal from "../_family-invite-member/page";
import { Sidebar } from "@/app/_components/Sidebar";
import { poppins, inter } from "@/app/_assets/fonts";

export default function Profile() {
  const [isChangePwModalOpen, setIsChangePwModalOpen] = useState(false);
  const [isInviteMemberModalOpen, setIsInviteMemberModalOpen] = useState(false);
  const [isDisableFamilyName, setIsDisableFamilyName] = useState(true);
  const [familyName, setFamilyName] = useState("Doe Family");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-2.5 bg-custom-gradient">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <Sidebar />
        <div className="w-full md:w-4/5 bg-white py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 rounded-3xl">
          <div className="flex gap-4 items-center mb-6">
            <ArrowLeft />
            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-[#222222]">
              FAMILY
            </h2>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <div className="rounded-lg flex flex-col gap-8">
              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="pt-5 lg:pt-[32px] 2xl:pl-[135px] md:pl-5">
                  <div className="grid grid-cols-1 lg:grid-cols-[69%_31%] gap-10">
                    <div className="mb-5">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                                className="text-[#006EBD] dark:text-blue-500 focus:underline text-right cursor-pointer text-md"
                                onClick={() => setIsDisableFamilyName(false)}
                              >
                                Edit
                              </button>
                            ) : (
                              <>
                                <button
                                  className="text-[#006EBD] dark:text-blue-500 focus:underline text-right cursor-pointer text-md"
                                  onClick={() => {
                                    setFamilyName("Doe Family");
                                    setIsDisableFamilyName(true);
                                  }}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="text-[#006EBD] dark:text-blue-500 focus:underline text-right cursor-pointer text-md"
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
                            className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="pl-4">
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
                      <h2 className="text-4xl font-bold mb-3">
                        Plan Subscription
                      </h2>
                      <div className="bg-[#006ebd] text-white rounded-3xl py-5 px-3 text-center">
                        <p className="text-white text-xl mb-3">
                          You are subscribed to
                        </p>
                        <p className="mb-1 text-white text-2xl lg:text-4xl font-bold">
                          JUST THE <br /> TWO OF US
                        </p>
                        <p className="text-[#8dc2ea] text-lg">
                          Upgrade subscription
                        </p>
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
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
      {isChangePwModalOpen && (
        <ChangePasswordModal
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
