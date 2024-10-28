import React from "react";
import checkmark from "./../../assets/checkmark.svg";
import { CallUsButton } from "@/main/common";
import menu from "./../../assets/menu.svg";
import NavbarItem from "./NavbarItem";
import { navbarItems } from "./consts";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto md:h-[100px]">
        <div>
          <img src={checkmark} alt="Checkmark" />
        </div>
        <div
          className={`static md:absolute bg-white md:min-h-fit p-5 left-0 transition-all duration-300 z-50 ${
            isOpen ? "top-[90px] animate-bounce-in" : "top-[-100%]"
          } w-auto md:w-full items-center px-5`}
        >
          <ul className="flex flex-row md:flex-col items-center justify-center gap-[4vw] md:gap-8 text-xl md:text-lg">
            {navbarItems.map(({ label, link }, index) => (
              <NavbarItem key={index} label={label} link={link} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <CallUsButton className={"py-6 px-6 text-xl"} />
          <img
            onClick={toggleMenu}
            src={menu}
            alt="Menu"
            className="cursor-pointer hidden md:block"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
