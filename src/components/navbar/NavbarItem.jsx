import React from "react";

const NavbarItem = ({ label, link }) => {
  const handleClick = () => {
    const section = document.getElementById(link);
    console.log("handel",section)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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