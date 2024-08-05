import React from "react";
import { CgOptions } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <div className="border flex items-center justify-between w-full px-4 py-2 border-gray-300 rounded-full">
        <div className="flex w-1/2 items-center justify-start gap-2">
          <CiSearch className="text-2xl" />
          <input
            className="w-full outline-none border-0 border-r border-gray-300"
            placeholder="Search..."
          />
        </div>
        <div className="flex pl-2 w-1/2 items-center justify-start gap-2">
          <IoLocationOutline className="text-2xl" />
          <input
            className="w-full  outline-none border-none"
            placeholder="Bengaluru"
          />
        </div>
      </div>
      <div className="bg-primary rounded-full p-3">
        <CgOptions className="text-white" />
      </div>
    </div>
  );
};

export default Navbar;
