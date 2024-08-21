'use client';

import { poppins, roboto } from '@/app/_assets/fonts';
import { Header } from '@/app/_components/Header';
import Payment from '../_payment/page';
import { useState } from 'react';

export default function SelectPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header isLoggedIn />
      <main className="w-full p-2.5">
        <div className="grid content-center w-full max-w-[1161px] min-h-screen mx-auto p-10 text-center">
          <div className="w-full max-w-[1000px] mx-auto">
            <div className="mb-[60px]">
              <h2
                className={`mb-2 text-[#222] text-4xl font-bold ${poppins.className}`}
              >
                Choose your plan
              </h2>
              <p
                className={`text-[#7B7B7B] text-xl font-light ${poppins.className}`}
              >
                This messaging is to be determined
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 w-full max-w-6xl gap-[26px]">
                {/* Plan 1 */}
                <div className="bg-white rounded-[40px] shadow-2xl p-6 px-7 pt-[54px] w-full max-w-xs lg:max-w-[350px] mx-auto border border-gray-200 h-[500px]">
                  <div className="text-center">
                    <p
                      className={`text-lg font-bold text-[#006EBD] ${poppins.className}`}
                    >
                      JUST THE TWO OF US
                    </p>
                    <p
                      className={`text-[64px] font-bold text-gray-900 mt-[21] tracking-tighter ${roboto.className}`}
                    >
                      $14.99
                    </p>
                    <p
                      className={`text-md text-[#006EBD] mb-[40px] font-bold ${poppins.className}`}
                    >
                      per month
                    </p>
                  </div>
                  <ul
                    className={`text-sm text-gray-600 mb-[61px] list-disc text-left pl-5 leading-[15px] ${poppins.className}`}
                  >
                    <li className="mb-2">2 Users</li>
                    <li className="mb-2">10 Documents up to 5MB in size</li>
                    <li className="mb-2">Web uploads into a single folder</li>
                    <li>External sharing via QR code</li>
                  </ul>
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className=" text-black rounded-full px-6 py-2 w-[80%] shadow-lg hover:bg-[#006EBD] border-[#006EBD] border-2 hover:text-white"
                  >
                    SELECT PLAN
                  </button>
                </div>

                {/* Plan 2 (Popular) */}
                <div className="bg-white rounded-[40px] shadow-2xl p-6 pt-[54px] w-full max-w-xs lg:max-w-[350px] mx-auto relative border-4 border-blue-500 h-[550px]">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#5ABAFF] text-white px-3 py-1 text-xs">
                    POPULAR
                  </div>
                  <div className="text-center mt-4">
                    <p
                      className={`text-lg font-bold text-[#006EBD] ${poppins.className}`}
                    >
                      FAMILY PLAN
                    </p>
                    <p
                      className={`text-[64px] font-bold text-gray-900 mt-[21] tracking-tighter ${roboto.className}`}
                    >
                      $19.99
                    </p>
                    <p
                      className={`text-md text-[#006EBD] mb-[40px] font-bold ${poppins.className}`}
                    >
                      per month
                    </p>
                  </div>
                  <ul
                    className={`text-md text-gray-600 mb-[65px] list-disc text-left pl-5 ${poppins.className}`}
                  >
                    <li className="mb-2">Up to 4 family members</li>
                    <li className="mb-2">Mobile uploads</li>
                    <li>50 Documents up to 10MB in size</li>
                  </ul>
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="bg-[#006EBD] text-white rounded-full px-6 py-2 w-[80%] shadow-lg hover:bg-blue-600"
                  >
                    SELECT PLAN
                  </button>
                </div>

                {/* Plan 3 */}
                <div className="bg-white rounded-[40px] shadow-2xl p-6 px-8 pt-[54px] w-full max-w-xs lg:max-w-[350px] mx-auto border border-gray-200 h-[500px]">
                  <div className="text-center">
                    <p
                      className={`text-lg font-bold text-[#006EBD] ${poppins.className}`}
                    >
                      EXTENDED FAMILY PLAN
                    </p>

                    <p
                      className={`text-[64px] font-bold text-gray-900 mt-[21] tracking-tighter ${roboto.className}`}
                    >
                      $24.95
                    </p>
                    <p
                      className={`text-md text-[#006EBD] mb-[40px] font-bold ${poppins.className}`}
                    >
                      per month
                    </p>
                  </div>
                  <ul
                    className={`text-sm text-gray-600 mb-[19px] list-disc text-left pl-5 leading-[20px] ${poppins.className}`}
                  >
                    <li className="mb-2">Up to 10 users</li>
                    <li className="mb-2">
                      Large file format storage up to 25MB
                    </li>
                    <li className="mb-2">Unlimited documents up to 2.5GB</li>
                    <li>Tags to organize files</li>
                  </ul>
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className=" text-black rounded-full px-6 py-2 w-[80%] shadow-lg hover:bg-[#006EBD] border-[#006EBD] border-2 hover:text-white"
                  >
                    SELECT PLAN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Payment isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
