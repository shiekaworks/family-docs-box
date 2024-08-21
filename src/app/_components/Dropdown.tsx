import Image from "next/image";
import action_more from "@/app/_assets/images/action_more.png";
import { useState } from "react";
interface ModalProps {
  children: React.ReactNode;
}

export const Dropdown: React.FC<ModalProps> = ({ children }) => {
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="inline-block text-left z-50">
      <Image
        src={action_more}
        alt="action_more"
        width={23}
        height={5}
        className="cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="absolute right-20 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};
