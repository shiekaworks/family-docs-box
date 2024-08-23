"use client";

import { useState } from "react";
import { poppins } from "@/app/_assets/fonts";
import { Button } from "@/app/_components/Button";
import { Header } from "@/app/_components/Header";
import { Modal } from "@/app/_components/Modal";
import qr from "@/app/_assets/images/sample_qr.png";
import Image from "next/image";
import icon_qr from "@/app/_assets/images/icon_qr.png";

export default function ChangePasswordModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const [showOldPassword, setShowOldSetPassword] = useState(false);
  const [showPassword, setShowSetPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="mx-auto lg:p-20 p-10 bg-white rounded-3xl shadow-2xl z-10 xs:m-[20px] xs:w-full xs:max-h-[700px] overflow-y-auto">
          <h2
            className={`mb-5 text-[#222] text-2xl lg:text-4xl font-bold text-center ${poppins.className}`}
          >
            Change password
          </h2>
          <div className="w-full lg:w-[500px] mb-[20px] relative mx-auto">
            <input
              id="password"
              type={showOldPassword ? "text" : "password"}
              placeholder="Old Password"
              className="w-full px-4 py-3 border border-[#E2E2E2] focus:outline-none focus:border-[#006EBD] focus:border-2 rounded-full text-md"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
              <svg
                id="eyeIcon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => setShowOldSetPassword(!showOldPassword)}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>
          <div className="w-full lg:w-[500px] mb-[20px] relative mx-auto">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border border-[#E2E2E2] focus:outline-none focus:border-[#006EBD] focus:border-2 rounded-full text-md"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
              <svg
                id="eyeIcon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => setShowSetPassword(!showPassword)}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>
          <div className="w-full lg:w-[500px] mb-[30px] relative mx-auto">
            <input
              id="password"
              name="password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-[#E2E2E2] focus:outline-none focus:border-[#006EBD] focus:border-2 rounded-full text-md"
            />

            <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
              <svg
                id="eyeIcon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>

          <div className="flex justify-center gap-[40px]">
            <Button
              type="submit"
              className="w-[175px] !text-black rounded-full px-6 py-2 bg-white font-semibold border-[#006EBD] border-2 "
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              className="w-[175px] px-12"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              CONFIRM
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
