"use client";
import { useState } from "react";
import Image from "next/image";
import profile from "@/app/_assets/images/Profile.png";
import home from "@/app/_assets/images/home.png";
import fam from "@/app/_assets/images/fam.png";
import settings from "@/app/_assets/images/settings.png";
import { poppins } from "@/app/_assets/fonts";
import logOut from "@/app/_assets/images/logout-icon.png";
import docs from "@/app/_assets/images/Documents 1.png";
import arrow from "@/app/_assets/images/arrow_back.png";
import action_1 from "@/app/_assets/images/action_1.png";
import action_2 from "@/app/_assets/images/action_2.png";
import action_3 from "@/app/_assets/images/action_3.png";
import upload from "@/app/_assets/images/upload_icon.png";
import user_profile from "@/app/_assets/images/user_profile.png";
import user1 from "@/app/_assets/images/user 1.png";
import { Dropdown } from "@/app/_components/Dropdown";
import Share from "../share/page";

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
            <Image src={user1} alt="Landscape picture" width={52} height={52} />
            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-[#222222]">
              PROFILE SETTINGS
            </h2>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <div className="rounded-lg flex flex-col gap-8">
              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="2xl:max-w-[350px] md:w-1/2">
                  <div className="items-center text-center ">
                    <Image
                      src={user_profile}
                      alt="user_profile"
                      width={350}
                      height={350}
                    />
                    <div className="cursor-pointer flex gap-3 mx-auto mt-[31px] w-full justify-center">
                      <Image src={upload} alt="upload" width={24} height={24} />
                      <p>Upload Image</p>
                    </div>
                  </div>
                </div>
                <div className="pt-[32px] pl-[135px]">
                  <div className="mb-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="pl-4">Customer id</label>
                        <input
                          type="text"
                          placeholder="1234567890"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="pl-4">User role</label>
                        <input
                          type="text"
                          placeholder="Account owner"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="pl-4">First name</label>
                        <input
                          type="text"
                          value="Jane"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                        />
                      </div>
                      <div>
                        <label className="pl-4">User role</label>
                        <input
                          type="text"
                          value="Doe"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                        />
                      </div>
                      <div>
                        <label className="pl-4">Phone number</label>
                        <input
                          type="text"
                          value="+987654321"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                        />
                      </div>
                      <div>
                        <label className="pl-4">Email address</label>
                        <input
                          type="text"
                          value="janedoe@gmail.com"
                          className="mt-1 w-full border border-gray-300 rounded-3xl h-16 p-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative text-right mt-[242px]">
              <button className="bg-[#006EBD] text-white rounded-3xl px-6 py-3 w-[200px]">
                Upload
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
