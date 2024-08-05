import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

const FoodItem: React.FC = () => {
  return (
    <div className="container py-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="bg-gray-100 rounded-full p-3">
          <IoIosArrowRoundBack className="text-2xl" />
        </div>
        <div className="bg-gray-100 rounded-full p-3">
          <FaHeart className="text-xl" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="font-semibold text-2xl">Chicken Biriyani</div>
        <div>
          <img
            className="rounded-3xl"
            src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">Details</div>
          <div className="flex items-center gap-2">
            <IoTimeOutline />
            15 mins
          </div>
        </div>
        <div>
          Aromatic basmati rice cooked with tender chicken pieces, saffron, and
          traditional spices.
        </div>
      </div>
      <button className="bg-black text-white rounded-full px-3 py-2 w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;
