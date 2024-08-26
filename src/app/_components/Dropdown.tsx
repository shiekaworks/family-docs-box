import Image from "next/image";
import MoreIcon from "@/app/_assets/icons/more.svg";
import { useState, useEffect, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
}

export const Dropdown: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="inline-block text-left " ref={dropdownRef}>
      <MoreIcon
        className="cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};
