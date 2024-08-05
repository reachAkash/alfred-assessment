import React from "react";
import { MdHome } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavFooter: React.FC = () => {
  return (
    <div className="container fixed py-4 bottom-0">
      <div className=" w-full py-3 flex items-center justify-around rounded-full bg-gray-100">
        <MdHome className="text-2xl" />
        <IoChatbubbleEllipsesOutline className="text-2xl" />
        <Link to="/cart" className="bg-black rounded-full p-3">
          <IoCartOutline className="text-white text-2xl" />
        </Link>
        <IoIosNotificationsOutline className="text-2xl" />
        <CiUser className="text-2xl" />
      </div>
    </div>
  );
};

export default NavFooter;
