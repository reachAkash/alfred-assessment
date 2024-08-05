import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <div className="font-semibold text-4xl">Not Found!</div>
      <button
        onClick={() => navigate("/")}
        className="bg-primary text-white px-4 py-2 rounded-full outline-none border-none active:scale-95 transition-all duration-300 ease-in-out"
      >
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
