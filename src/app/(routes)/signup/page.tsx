"use client";
import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import bg01 from "@/app/_assets/images/img01.png";
import { poppins, inter } from "@/app/_assets/fonts";
import { Button } from "@/app/_components/Button";
import { Header } from "@/app/_components/Header";
import FbIcon from "@/app/_assets/icons/fb.svg";
import GoogleIcon from "@/app/_assets/icons/google.svg";
import { signupSchema } from "@/app/_models/signup";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowSetPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    console.log("Submitting...", data);
    router.push("/signup-family");
  };

  return (
    <>
      <Header />
      <main className="w-full p-2.5">
        <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1fr] w-full max-w-[1750px] min-h-screen mx-auto">
          <div className="flex flex-col justify-between lg:block">
            <Image
              src={bg01}
              alt="Landscape picture"
              className="w-full h-[300px] lg:h-full object-cover rounded-[30px]"
            />
          </div>

          <div className="grid content-center p-4 lg:p-10 text-center">
            <div className="mb-[30px] lg:mb-[60px]">
              <h2
                className={`mb-1 text-[#222] text-2xl lg:text-4xl font-bold ${poppins.className}`}
              >
                Welcome to FamilyDocsBox
              </h2>
              <p
                className={`text-[#7B7B7B] text-lg font-light ${poppins.className}`}
              >
                Register your account
              </p>
            </div>

            <div className={`${inter.className}`}>
              <form
                className="grid justify-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="w-[300px] sm:w-[500px] mb-5">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-2 ml-4 text-red-600 text-sm text-left">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="w-[300px] sm:w-[500px] mb-5">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-2 ml-4 text-red-600 text-sm text-left">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="w-[300px] sm:w-[500px] mb-[30px] relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                    {...register("password")}
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                    <svg
                      id="eyeIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={() => setShowSetPassword(!showPassword)}
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>

                  {errors.password && (
                    <p className="mt-2 ml-4 text-red-600 text-sm text-left">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full max-w-[150px] mx-auto">
                  SIGN UP
                </Button>
              </form>

              <div className="flex items-center justify-center mb-4 w-full max-w-[500px] mx-auto pt-[38px]">
                <hr className="w-full border-gray-300" />
                <span className="px-2 text-gray-500">or</span>
                <hr className="w-full border-gray-300" />
              </div>

              <p>
                Already have an account?{" "}
                <a href="/login" className="text-[#006EBD] underline">
                  Sign in
                </a>
              </p>

              <div className="flex items-center justify-center">
                <div className="p-6 w-full max-w-[500px]">
                  <div className="mb-4">
                    <button className="flex items-center justify-center w-full px-4 py-3 space-x-2 text-gray-600 border rounded-full hover:bg-gray-50">
                      <GoogleIcon />

                      <span>Continue with Google</span>
                    </button>
                  </div>

                  <div className="mb-6">
                    <button className="flex items-center justify-center w-full px-4 py-3 space-x-2 text-gray-600 border rounded-full hover:bg-gray-50">
                      <FbIcon />
                      <span>Continue with Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
