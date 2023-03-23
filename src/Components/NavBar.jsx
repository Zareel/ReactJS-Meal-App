import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="max-w-6xl mx-auto h-[100px] bg-[#111111] py-2 flex justify-between items-center sticky top-0 left-0 z-50">
      <div>
        <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-700">
          Meals App
        </h1>
      </div>
      <div className="flex gap-14 text-md tracking-wide text-gray-300 font-poppins ">
        <Link to={"/"} className="hover:text-gray-100 ">
          Home
        </Link>
        <Link to="/categories" className="hover:text-gray-100">
          Categories
        </Link>
        <Link to={"/random"} className="hover:text-gray-100">
          Random
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
