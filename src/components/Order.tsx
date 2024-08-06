import { RootState } from "@/redux/store";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Order: React.FC = () => {
  const navigate = useNavigate();
  const orderItems = useSelector((store: RootState) => store.cart.orderItems);
  return (
    <div className="container py-4 space-y-8">
      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate(-1)}
          className="bg-gray-100 rounded-full p-3"
        >
          <IoIosArrowRoundBack className="text-2xl" />
        </div>
        <div className="font-semibold text-2xl">My Orders</div>
      </div>
      <div className="space-y-3">
        {orderItems?.map((item: any, idx: number) => {
          console.log(item);
          return (
            <div className="flex items-start justify-between border-b border-gray-500 py-4">
              <div className="font-semibold text-2xl">{idx + 1}.</div>
              <div>
                <div className="font-semibold text-xl">Items</div>
                {item?.map((food: any) => {
                  return <div>{food?.item}</div>;
                })}
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl">Status</div>
                <div>
                  {Math.random() > 0.5 ? (
                    <span className="bg-green-400 rounded-md text-white px-3 py-1">
                      Delivered
                    </span>
                  ) : (
                    <span className="bg-red-400 rounded-md text-white px-3 py-1">
                      Preparing
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
