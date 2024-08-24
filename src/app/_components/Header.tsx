import React from 'react';
import Image from 'next/image';
import { poppins } from '@/app/_assets/fonts';
import LogOutIcon from '@/app/_assets/icons/logout.svg';
import ProfileIcon from '@/app/_assets/icons/user.svg';
import { useRouter } from 'next/navigation';
import Logo from '@/app/_assets/images/famdocsbox-logo.png';

interface HeaderProps {
  isLoggedIn?: boolean | undefined;
}

export const Header = ({ isLoggedIn }: HeaderProps): React.JSX.Element => {
  const router = useRouter();
  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div
      className={`block lg:absolute lg:top-0 w-full text-base z-10 ${poppins.className}`}
    >
      <div className="w-full max-w-[1750px] mx-auto px-8 py-8 pb-0 md:pb-8 flex">
        <div className="w-full md:w-auto flex justify-start">
          <Image
            src={Logo}
            alt="Logo"
            height={40}
            className="rounded-full mx-auto lg:mx-0"
          />
        </div>

        {isLoggedIn && (
          <div className="flex justify-end w-full text-center md:text-right">
            <div className="flex flex-wrap items-center gap-4 md:gap-[60px]">
              <a
                href="/profile"
                className="flex items-center cursor-pointer flex-col sm:flex-row"
              >
                <div className="bg-[#006EBD] rounded-2xl h-[30px] w-[30px] p-[5px] sm:mr-[10px]">
                  <ProfileIcon />
                </div>
                <p className="pt-[5px] sm:pt-0">Jane Doe</p>
              </a>
              <button
                type="button"
                className="flex items-center cursor-pointer flex-col sm:flex-row"
                onClick={handleLogout}
              >
                <div className="rounded-2xl h-[30px] w-[30px] p-[5px] sm:mr-[10px]">
                  <LogOutIcon />
                </div>
                <p className="pt-[5px] sm:pt-0">Logout</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
