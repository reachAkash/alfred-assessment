import React from "react";
import { MdHome } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const NavFooter: React.FC = () => {
  const handleToast = (data: string, desc: string) => {
    toast(data, {
      description: desc,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };
  return (
    <div className="container fixed py-4 bottom-0 z-50">
      <div className=" w-full py-3 flex items-center justify-around rounded-full bg-gray-100">
        <MdHome className="text-2xl" />
        <IoChatbubbleEllipsesOutline
          onClick={() =>
            handleToast(
              "Feature Coming Soon!",
              "Thank you for your patience..."
            )
          }
          className="text-2xl active:text-red-500"
        />
        <Link
          to="/cart"
          className="bg-black rounded-full p-3 active:scale-95 transition-all ease-in-out duration-300"
        >
          <IoCartOutline className="text-white text-2xl" />
        </Link>
        <Link to="/orders">
          <div className="relative">
            <IoIosNotificationsOutline className="text-2xl active:text-red-500" />
            <span className="absolute top-0 left-1 w-2 h-2 rounded-full bg-red-500"></span>
          </div>
        </Link>
        <CiUser
          onClick={() =>
            handleToast(
              "Feature Coming Soon!",
              "Thank you for your patience..."
            )
          }
          className="text-2xl active:text-red-500"
        />
      </div>
    </div>
  );
};

export default NavFooter;
