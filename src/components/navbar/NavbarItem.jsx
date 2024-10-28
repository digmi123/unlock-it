import React from "react";

const NavbarItem = ({ label, link }) => {
  return (
    <li>
      <a className="hover:text-gray-500 cursor-pointer" link={link}>
        {label}
      </a>
    </li>
  );
};

export default NavbarItem;
