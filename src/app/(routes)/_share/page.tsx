'use client';

import { poppins } from '@/app/_assets/fonts';
import { Button } from '@/app/_components/Button';
import { Header } from '@/app/_components/Header';
import { Modal } from '@/app/_components/Modal';
import qr from '@/app/_assets/images/sample_qr.png';
import Image from 'next/image';
import IconQR from '@/app/_assets/icons/qr.svg';

export default function Share({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="lg:w-[30vw] w-full mx-auto p-10 bg-white rounded-3xl shadow-2xl z-10 text-center  xs:m-[20px] xs:w-full xs:max-h-[700px] overflow-y-auto">
          <div className="mx-auto">
            <div className="bg-[#006EBD] p-[20px] rounded-full w-[80px] h-[80px] mx-auto mb-[30px]">
              <IconQR />
            </div>
            <h2
              className={`text-[#222] text-2xl lg:text-4xl mb-[20px] font-bold ${poppins.className}`}
            >
              Share
            </h2>
            <p
              className={`text-[#7B7B7B] text-[16px] lg:text-[20px] font-light mb-[20px] ${poppins.className}`}
            >
              Scan QR below to share the file
            </p>
            <Image src={qr} alt="" className="mb-[40px] mx-auto" />
            <Button
              type="submit"
              className="w-[175px] px-12"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              DONE
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
