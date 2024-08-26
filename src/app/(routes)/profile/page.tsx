"use client";
import { useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/app/_assets/icons/arrow_left.svg";
import user_profile from "@/app/_assets/images/user_profile.png";
import Camera from "@/app/_assets/icons/camera.svg";
import Share from "../_share/page";
import { Sidebar } from "@/app/_components/Sidebar";
import ProfileChangePasswordModal from "../_profile-change-password/page";

export default function Profile() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isChangePwModalOpen, setIsChangePwModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
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
              PROFILE SETTINGS
            </h2>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <div className="rounded-lg flex flex-col gap-8">
              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative lg:max-w-[350px] md:w-full overflow-visible border border-gray-300">
                    {image ? (
                      <Image
                        src={image}
                        alt="Uploaded"
                        className="object-cover w-full h-full rounded-full"
                      />
                    ) : (
                      <Image
                        src={user_profile}
                        alt="user_profile"
                        width={370}
                        height={370}
                        className="mx-auto rounded-full"
                      />
                    )}
                    <label className="absolute bottom-[25px] right-[30px] translate-x-1/2 translate-y-1/2 lg:right-[4.95rem] z-10 mb-2 mr-2 bg-[#e4e6eb] p-2 rounded-full shadow-md cursor-pointer hover:opacity-90">
                      <Camera />
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
                <div className="pt-[32px] 2xl:pl-[135px] md:pl-5">
                  <div className="mb-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <div>
                        <label className="pl-4">Customer id</label>
                        <input
                          type="text"
                          placeholder="1234567890"
                          className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="pl-4">User role</label>
                        <input
                          type="text"
                          placeholder="Account owner"
                          className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="pl-4">First name</label>
                        <input
                          type="text"
                          value="Jane"
                          className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                        />
                      </div>
                      <div>
                        <label className="pl-4">User role</label>
                        <input
                          type="text"
                          value="Doe"
                          className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                        />
                      </div>
                      <div>
                        <label className="pl-4">Phone number</label>
                        <input
                          type="text"
                          value="+987654321"
                          className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                        />
                      </div>
                      <div>
                        <label className="pl-4">Email address</label>
                        <input
                          type="text"
                          value="janedoe@gmail.com"
                          className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                        />
                      </div>
                    </div>
                    <div className="w-full relative text-right lg:mt-10 mt-6">
                      <button
                        className="bg-[#006EBD] text-white rounded-3xl px-6 py-3 w-full md:w-[200px] lg:mr-5 lg:mb-0 mb-5"
                        onClick={() => setIsChangePwModalOpen(true)}
                      >
                        Change Password
                      </button>
                      <button className="bg-[#006EBD] text-white rounded-3xl px-6 py-3  w-full md:w-[200px]">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
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
      {isChangePwModalOpen && (
        <ProfileChangePasswordModal
          isModalOpen={isChangePwModalOpen}
          setIsModalOpen={setIsChangePwModalOpen}
        />
      )}
    </main>
  );
}
