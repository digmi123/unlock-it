import React from "react";

const NavbarItem = ({ label, refSection }) => {
  const handleClick = () => {
    if (refSection && refSection.current) {
      refSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li>
      <a onClick={handleClick} className="hover:text-gray-500 cursor-pointer">
        {label}
      </a>
    </li>
  );
};

export default NavbarItem;
