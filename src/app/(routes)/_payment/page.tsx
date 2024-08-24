'use client';

import { poppins } from '@/app/_assets/fonts';
import { Button } from '@/app/_components/Button';
import { Header } from '@/app/_components/Header';
import { Modal } from '@/app/_components/Modal';
import cardsIcon from '@/app/_assets/images/cards.png';
import Image from 'next/image';
import PaymentConfirmed from '../_payment-confirmed/page';
import { useState } from 'react';

export default function Payment({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="mx-auto px-6 py-10 bg-white rounded-3xl shadow-2xl z-10 xs:m-[20px] xs:w-full xs:max-h-[600px] overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-center md:gap-[40px] lg:gap-4 gap-7 mb-10">
            <div className="mx-auto">
              <h2
                className={`mb-1 text-[#222] text-3xl lg:text-4xl font-bold ${poppins.className}`}
              >
                Payment details
              </h2>
              <p
                className={`text-[#7B7B7B] text-base md:text-lg font-light mb-10 ${poppins.className}`}
              >
                Test Credit Card: 4242424242424242, EXP: 12/25, CVV: 123,
                Zipcode: 02154
              </p>

              <div className="w-full mb-[20px] mx-auto">
                <div className="relative">
                  <input
                    id="card number"
                    name="card number"
                    type="text"
                    placeholder="Card Number"
                    className="text-[14px] px-4 py-3 w-full mb-[20px] border border-[#E2E2E2] focus:outline-none focus:border-[#006EBD] focus:border-2 rounded-full text-base"
                  />
                  <div className="absolute top-[13px] right-4 flex items-center">
                    <Image
                      src={cardsIcon}
                      alt="cards"
                      className="w-[100px] h-auto"
                    />
                  </div>
                </div>

                <div className="flex gap-5 md:gap-[34px] mb-[20px]">
                  <input
                    id="MM/YY"
                    name="MM/YY"
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-[#E2E2E2] focus:outline-none focus:border-[#006EBD] focus:border-2 rounded-full text-base"
                  />
                  <input
                    id="CVC"
                    name="CVC"
                    type="text"
                    placeholder="CVC"
                    className="w-full px-4 py-3 border border-[#E2E2E2] focus:outline-none focus:border-[#006EBD] focus:border-2 rounded-full text-base"
                  />
                </div>
              </div>
              <input
                id="Country"
                name="Country"
                type="text"
                placeholder="Country"
                className="w-full px-4 py-3 border border-[#E2E2E2] focus:outline-none focus:border-[#006EBD] focus:border-2 rounded-full text-base"
              />
            </div>
            <div
              className={`border-solid border-0 lg:border-l border-[#E2E2E2] lg:pl-[40px] pt-5 md:pt-0 ${poppins.className}`}
            >
              <h3 className={`text-[#222] text-xl mb-[5px] font-bold`}>
                JUST THE TWO OF US
              </h3>
              <p className="font-bold text-[24px] mb-[20px]">
                $14.99 <span className="font-normal">|</span>{' '}
                <span className="font-normal"> Month</span>
              </p>
              <ul
                className={`text-base text-gray-600 mb-[19px] list-disc text-left pl-5 ${poppins.className}`}
              >
                <li>2 Users</li>
                <li>10 Documents up to 5MB in size</li>
                <li>Web uploads into a single folder</li>
                <li>External sharing via QR code </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center gap-5 md:gap-[40px]">
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
              onClick={() => {
                setIsPaymentConfirmed(!isPaymentConfirmed);
                setIsModalOpen(!isModalOpen);
              }}
            >
              CONFIRM
            </Button>
          </div>
        </div>
      </Modal>

      <PaymentConfirmed
        isModalOpen={isPaymentConfirmed}
        setIsModalOpen={setIsPaymentConfirmed}
      />
    </>
  );
}
