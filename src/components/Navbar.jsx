import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-gray-200">
      <div className="container flex items-center justify-between">
        <NavLink
          className="link text-black font-semibold text-[30px] capitalize p-5"
          to={"/"}
        >
          Products
        </NavLink>
        <NavLink
          className="link text-black font-semibold text-[30px] capitalize p-5"
          to={"/likes"}
        >
          Like Product
        </NavLink>
        <NavLink
          className="link text-black font-semibold text-[30px] capitalize p-5"
          to={"/bought"}
        >
          Bought Product
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
