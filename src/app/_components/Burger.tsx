import { useState } from "react";
import Burger from "@/app/_assets/icons/burger.svg";

interface Props {
  children: React.ReactNode;
}

const BurgerIcon: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="block md:hidden p-2 focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <Burger />
      </button>

      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white shadow-md z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">{children}</div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default BurgerIcon;
