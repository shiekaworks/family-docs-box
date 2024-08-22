'use client';
import { useState } from 'react';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import bg01 from '@/app/_assets/images/img02.png';
import { poppins, inter } from '@/app/_assets/fonts';
import { Button } from '@/app/_components/Button';
import { Header } from '@/app/_components/Header';
import { Modal } from '@/app/_components/Modal';
import { signupFamilySchema } from '@/app/_models/signup';

interface FormData {
  familyName: string;
  email1: string;
  email2: string;
  email3: string;
  email4: string;
}

export default function SignUpFamily() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowSetPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(signupFamilySchema),
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    console.log('Submitting...', data);
    setIsModalOpen((prev) => !prev);
  };

  const handleNext = () => {
    setIsModalOpen((prev) => !prev);
    router.push('/select-plan');
  };

  return (
    <>
      <Header isLoggedIn />
      <main className="w-full p-2.5">
        <div className="flex flex-col lg:flex-row w-full min-h-screen mx-auto">
          <div className="p-10 text-center w-full pt-[76px] order-2 lg:order-1">
            <div className="w-full lg:w-[615px] lg:float-right">
              <div className="mb-[60px]">
                <h2
                  className={`mb-1 text-[#222] text-3xl lg:text-4xl font-bold ${poppins.className}`}
                >
                  Add up to four family or
                  <br />
                  trusted friends
                </h2>
                <p
                  className={`text-[#7B7B7B] text-lg font-light ${poppins.className}`}
                >
                  What is the name of your family?
                </p>
              </div>

              <div className={`${inter.className}`}>
                <form
                  className="grid justify-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="w-full lg:w-[500px] mb-5">
                    <input
                      id="familyName"
                      type="text"
                      placeholder="Family name"
                      className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                      {...register('familyName')}
                    />
                    {errors.familyName && (
                      <p className="text-red-600 text-md mt-2">
                        {errors.familyName.message}
                      </p>
                    )}
                  </div>

                  <p className="mb-5 text-[#7B7B7B] text-md">
                    Users that are part of your account will be able
                    <br /> to access your account documents
                  </p>

                  <div className="w-[300px] sm:w-[500px] mb-5">
                    <input
                      id="email1"
                      type="email"
                      placeholder="Email address 1"
                      className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                      {...register('email1')}
                    />
                    {errors.email1 && (
                      <p className="text-red-600 text-md mt-2">
                        {errors.email1.message}
                      </p>
                    )}
                  </div>

                  <div className="w-[300px] sm:w-[500px] mb-5">
                    <input
                      id="email2"
                      type="email"
                      placeholder="Email address 2"
                      className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                      {...register('email2')}
                    />
                    {errors.email1 && (
                      <p className="text-red-600 text-md mt-2">
                        {errors.email1.message}
                      </p>
                    )}
                  </div>

                  <div className="w-[300px] sm:w-[500px] mb-5">
                    <input
                      id="email3"
                      type="email"
                      placeholder="Email address 3"
                      className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                      {...register('email3')}
                    />
                    {errors.email3 && (
                      <p className="text-red-600 text-md mt-2">
                        {errors.email3.message}
                      </p>
                    )}
                  </div>

                  <div className="w-[300px] sm:w-[500px] mb-5">
                    <input
                      id="email4"
                      type="email"
                      placeholder="Email address 4"
                      className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                      {...register('email4')}
                    />
                    {errors.email4 && (
                      <p className="text-red-600 text-md mt-2">
                        {errors.email4.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full max-w-[175px] mx-auto"
                  >
                    NEXT
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden pt-5 lg:pt-[100px] order-1 lg:order-2">
            <Image
              src={bg01}
              alt="Landscape picture"
              className="h-[300px] md:h-[500px] lg:h-full object-cover rounded-[30px] lg:float-right w-full lg:w-[800px]"
            />
          </div>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen((prev) => !prev)}
      >
        <div className="mx-auto lg:p-20 p-10 bg-white rounded-3xl shadow-2xl z-10 xs:m-[20px] xs:w-full xs:max-h-[700px] overflow-y-auto">
          <h2
            className={`mb-1 text-[#222] text-2xl lg:text-4xl font-bold text-center ${poppins.className}`}
          >
            Set a family password
          </h2>
          <p
            className={`text-[#7B7B7B] text-lg font-light text-center mb-[40px] ${poppins.className}`}
          >
            Documents are encrypted with this password  <br />
            (which is not stored on the server).
          </p>
          <div className="w-full lg:w-[500px] mb-[20px] relative mx-auto">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
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
              type={showConfirmPassword ? 'text' : 'password'}
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
              onClick={() => setIsModalOpen((prev) => !prev)}
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              className="w-[175px] px-12"
              onClick={handleNext}
            >
              NEXT
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
