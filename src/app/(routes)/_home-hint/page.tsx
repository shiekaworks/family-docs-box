"use client";

import { poppins } from "@/app/_assets/fonts";
import { Button } from "@/app/_components/Button";
import { Modal } from "@/app/_components/Modal";
export default function ViewHintModal({
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
          <h2
            className={`mb-8 text-[#222] text-[25px] lg:text-4xl font-bold text-center ${poppins.className}`}
          >
            Hint
          </h2>
          <div className="w-full sm:w-[500px] mb-[30px]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              necessitatibus quaerat deleniti voluptate ratione excepturi
              nesciunt officiis nisi adipisci tenetur autem, exercitationem,
              ducimus, distinctio atque! Odio aperiam deserunt nostrum numquam?
            </p>
          </div>

          <Button
            type="submit"
            className="w-full lg:w-[175px] float-right  !text-black rounded-full px-6 py-2 bg-white font-semibold border-[#006EBD] border-2 "
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            CLOSE
          </Button>
        </div>
      </Modal>
    </>
  );
}
