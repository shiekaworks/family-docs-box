'use client';

import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { loginSchema } from '@/app/_models/login';
import bg01 from '@/app/_assets/images/img01.png';
import { poppins, inter } from '@/app/_assets/fonts';
import { Button } from '@/app/_components/Button';
import { Header } from '@/app/_components/Header';

interface FormData {
  email: string;
}

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    console.log('Submitting...', data);
    router.push('/');
  };

  return (
    <>
      <Header />
      <main className="w-full p-2.5">
        <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1fr] w-full max-w-[1750px] min-h-screen mx-auto">
          <div className="py-10 md:py-0 flex flex-col justify-between lg:block">
            <Image
              src={bg01}
              alt=""
              className="w-full h-[300px] lg:h-full object-cover rounded-[30px]"
            />
          </div>

          <div className="grid content-center p-4 pb-10 text-center">
            <div className="mb-[30px] lg:mb-[60px]">
              <h2
                className={`mb-1 text-[#222] text-3xl lg:text-4xl font-bold ${poppins.className}`}
              >
                Welcome back to FamilyDocsBox
              </h2>
              <p
                className={`text-[#7B7B7B] text-base md:text-lg font-light ${poppins.className}`}
              >
                Login to your account
              </p>
            </div>

            <div className={`${inter.className}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:max-w-[500px] mx-auto">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-base focus:outline-none focus:border-[#006EBD] focus:border-2"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-2 ml-4 text-red-600 text-sm text-left">
                      {errors.email.message}
                    </p>
                  )}

                  <p className="mb-[20px] lg:mb-[30px] pr-3 text-right">
                    <a href="#" className="text-[#006EBD] text-sm underline">
                      Forgot password?
                    </a>
                  </p>
                </div>

                <Button type="submit" className="w-[200px] mx-auto">
                  LOGIN WITH EMAIL
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
