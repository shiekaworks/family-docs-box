import React from "react";
import Image from "next/image";
import { poppins } from "@/app/_assets/fonts";

export const Footer = (): React.JSX.Element => {
  return (
    <div
      className={`w-full bg-[#252728] text-white text-sm ${poppins.className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-14 w-full max-w-[1750px] mx-auto px-4 md:px-10 py-4 md:py-2.5">
        <Image
          src="https://dummyimage.com/70x70/000/ffffff"
          alt="Landscape picture"
          width={70}
          height={70}
          className="rounded-full mx-auto lg:mx-0"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-col md:flex-row md:gap-6">
            <li className="mb-2 md:mb-0">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2 md:mb-0 border-t md:border-t-0 md:border-l md:border-r md:border-white border-solid border-white pt-2 md:pt-0 md:px-6">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>

          <p className="text-center md:text-right text-xs md:text-sm mt-2 md:mt-0">
            © 2024 CentralScottLLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
