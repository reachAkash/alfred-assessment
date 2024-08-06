import { addToCart } from "@/redux/foodSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const FoodItem: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const food = useSelector((store: RootState) => store.cart.currentItem);
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

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
    <div className="container py-4 space-y-3">
      <div className="flex items-center justify-between">
        <div
          onClick={() => navigate(-1)}
          className="bg-gray-100 rounded-full p-3"
        >
          <IoIosArrowRoundBack className="text-2xl" />
        </div>
        <div className="bg-gray-100 rounded-full p-4">
          <FaHeart
            onClick={() =>
              handleToast(
                "Feature Coming Soon!",
                "Thank you for your patience..."
              )
            }
            className="text-xl active:text-red-500"
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="font-semibold text-2xl">{food?.item}</div>
        <div>
          <img className="w-[30rem] h-[21rem] rounded-3xl" src={food?.image} />
        </div>
        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">Details</div>
          <div className="flex items-center gap-2">
            <IoTimeOutline />
            15 mins
          </div>
        </div>
        <div>{food?.description}</div>
      </div>
      <button
        onClick={() => {
          handleAddToCart(food);
          handleToast("Item Added to Cart", "Thank you for choosing us...");
        }}
        className="bg-black text-white rounded-full px-3 py-2 w-full active:scale-95 transition-all ease-in-out duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;
