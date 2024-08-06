import { addToCart, removeFromCart } from "@/redux/foodSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { v4 } from "uuid";

const RestrauntMenu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restraunt = useSelector((store: RootState) => store.cart.currentRes);
  const menu = restraunt.menu;

  const handleAddCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleToast = (data: string, desc: string, item: any) => {
    toast(data, {
      description: desc,
      action: {
        label: "Undo",
        onClick: () => dispatch(removeFromCart(item?.item)),
      },
    });
  };

  return (
    <div className="container py-4 space-y-8">
      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate(-1)}
          className="bg-gray-100 rounded-full p-3"
        >
          <IoIosArrowRoundBack className="text-2xl" />
        </div>
        <div className="font-semibold text-2xl">{restraunt?.name}</div>
      </div>
      <div className="space-y-7">
        {menu?.map((item: any) => (
          <div
            key={v4()}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center justify-normal gap-2">
              <div className="w-[50%]">
                <img
                  className="w-[12rem] h-[10rem] flex-shrink-0 rounded-lg"
                  src={item?.image}
                  alt={item?.item}
                />
              </div>
              <div className="w-[50%]">
                <div className="space-y-4">
                  <div className="font-medium text-2xl">{item?.item}</div>
                  <div className="">Rs. {item?.price}</div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                handleAddCart(item);
                handleToast(
                  "Item Added to Cart!",
                  "Thank you for choosing us...",
                  item
                );
              }}
              className="p-3 bg-black rounded-full"
            >
              <BsCart2 className="text-white text-xl" />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/cart")}
        className="bg-black text-white rounded-full px-3 py-2 w-full active:scale-95 transition-all ease-in-out duration-300"
      >
        Go to Cart
      </button>
    </div>
  );
};

export default RestrauntMenu;
