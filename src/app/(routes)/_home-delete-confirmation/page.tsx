'use client';

import { poppins } from '@/app/_assets/fonts';
import { Button } from '@/app/_components/Button';
import { Modal } from '@/app/_components/Modal';
export default function DeleteConfirmationModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="mx-auto lg:p-20 p-10 bg-white rounded-3xl shadow-2xl z-10 xs:m-[20px] xs:w-full xs:max-h-[700px] overflow-y-auto">
          <div className="mx-auto text-center">
            <h2
              className={`mb-1 text-[#222] text-3xl lg:text-4xl font-bold ${poppins.className}`}
            >
              Delete
            </h2>
            <p
              className={`text-[#7B7B7B] text-base md:text-lg font-light mb-[60px] ${poppins.className}`}
            >
              Are you sure you want to delete this file?
            </p>
          </div>

          <div className="flex justify-center gap-2 md:gap-[40px]">
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
