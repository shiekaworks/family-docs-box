import React from "react";
import { poppins } from "@/app/_assets/fonts";
import Image from "next/image";
import profile from "@/app/_assets/images/Profile.png";
import HomeIcon from "@/app/_assets/icons/home.svg";
import FamIcon from "@/app/_assets/icons/family.svg";
import SettingsIcon from "@/app/_assets/icons/settings.svg";
import LogOutIcon from "@/app/_assets/icons/logout.svg";

export const Sidebar = (): React.JSX.Element => {
  return (
    <div
      className={`w-full md:w-1/5 bg-white py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 rounded-3xl relative ${poppins.className}`}
    >
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
          <a
            href="/"
            className={`flex gap-3 text-base md:text-lg ${poppins.className}`}
          >
            <span>
              <HomeIcon />
            </span>
            <p>Home</p>
          </a>
        </li>
        <li className="mb-6">
          <a
            href="/family"
            className={`flex gap-3 text-base md:text-lg ${poppins.className}`}
          >
            <span>
              <FamIcon />
            </span>
            <p>Family</p>
          </a>
        </li>
        <li>
          <a
            href="/profile"
            className={`flex gap-3 text-base md:text-lg ${poppins.className}`}
          >
            <span>
              <SettingsIcon />
            </span>
            <p>Profile Settings</p>
          </a>
        </li>
      </ul>
      <div className="flex cursor-pointer items-center absolute bottom-[1.823vw]">
        <div className="rounded-2xl h-8 w-8 p-1 mr-3">
          <LogOutIcon />
        </div>
        <p className="pt-1 text-md">Logout</p>
      </div>
    </div>
  );
};
