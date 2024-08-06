import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { placeOrder, removeFromCart } from "@/redux/foodSlice";
import { toast } from "sonner";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foodItems = useSelector((store: RootState) => store.cart.cart);
  const handleRemoveCart = (item: string) => {
    dispatch(removeFromCart(item));
  };
  const subTotalPrice = foodItems?.reduce(
    (acc: number, curr: any) => acc + curr.price,
    0
  );
  const discount = subTotalPrice / 10;
  const handlePlaceorder = () => {
    dispatch(placeOrder());
    toast("Order Placed successfully 🎉");
    navigate("/orders");
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
        <div className="font-semibold text-2xl">My Cart</div>
      </div>
      <div className="space-y-7">
        {foodItems.length > 0 ? (
          foodItems?.map((item) => {
            return (
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-normal gap-4">
                  <div className="">
                    <img
                      className="w-[8rem] h-[8rem] cart-image flex-shrink-0 rounded-lg"
                      src={item?.image}
                    />
                  </div>
                  <div className="w-[50%]">
                    <div className="space-y-4">
                      <div className="font-medium text-2xl">{item?.item}</div>
                      <div className="">Rs. {item?.price}</div>
                    </div>
                  </div>
                </div>
                <RxCross1 onClick={() => handleRemoveCart(item?.item)} />
              </div>
            );
          })
        ) : (
          <div className="h-[53vh] flex flex-col items-center justify-center space-y-3">
            <div className="font-semibold text-2xl">Cart is Empty!</div>
            <div
              onClick={() => navigate("/")}
              className="bg-black text-white px-4 py-2 rounded-full w-fit"
            >
              Add Items
            </div>
          </div>
        )}
      </div>

      <div className=" space-y-2">
        <div className="flex items-center justify-between">
          <div className="font-medium">Sub Total</div>
          <div>Rs. {subTotalPrice}</div>
        </div>
        <div className="flex items-center border-b border-gray-200 pb-2  justify-between">
          <div className="font-medium">Discount</div>
          <div>Rs. {subTotalPrice / 10}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-semibold">Total</div>
          <div>Rs. {subTotalPrice - discount}</div>
        </div>
      </div>
      <button
        onClick={() => handlePlaceorder()}
        disabled={foodItems.length == 0}
        className="bg-black text-white disabled:opacity-70 rounded-full px-3 py-2 w-full active:scale-95 transition-all ease-in-out duration-300"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
