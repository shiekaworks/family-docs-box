"use client";

import { poppins } from "@/app/_assets/fonts";
import { Button } from "@/app/_components/Button";
import { Modal } from "@/app/_components/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { loginSchema } from "@/app/_models/login";

interface FormData {
  email: string;
}

export default function InviteMemberModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="mx-auto lg:p-20 p-10 bg-white rounded-3xl shadow-2xl z-10 xs:m-[20px] xs:w-full xs:max-h-[700px] overflow-y-auto">
          <h2
            className={`mb-5 text-[#222] text-2xl lg:text-4xl font-bold text-center ${poppins.className}`}
          >
            Invite Member
          </h2>
          <div className="w-full sm:w-[500px] mb-5">
            <input
              id="email1"
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
              required
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600 text-md mt-2">
                {errors.email.message}
              </p>
            )}
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
