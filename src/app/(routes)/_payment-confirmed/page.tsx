"use client";

import { poppins } from "@/app/_assets/fonts";
import { Button } from "@/app/_components/Button";
import { Modal } from "@/app/_components/Modal";
import Check from "@/app/_assets/icons/check.svg";
import { useRouter } from "next/navigation";

export default function PaymentConfirmed({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const router = useRouter();

  const handleClick = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
      <div className="lg:w-[35vw] mx-auto py-20 px-5 bg-white rounded-3xl shadow-2xl z-10  xs:m-[20px] xs:w-full xs:max-h-[700px] overflow-y-auto">
        <div className="flex justify-center gap-[40px] text-center">
          <div className="mx-auto">
            <div className="bg-[#5AAE72] p-[20px] pt-[28px] rounded-full w-[80px] h-[80px] mx-auto mb-[40px]">
              <Check />
            </div>
            <h2
              className={`mb-1 text-[#222] text-2xl lg:text-4xl font-bold ${poppins.className}`}
            >
              Payment confirmed!
            </h2>
            <p
              className={`text-[#7B7B7B] text-lg font-light mb-[60px] ${poppins.className}`}
            >
              Thank you for purchasing the perfect
              <br />
              plan for your family!
            </p>
            <Button
              type="submit"
              className="w-[175px] px-12"
              onClick={handleClick}
            >
              GO TO HOME
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
