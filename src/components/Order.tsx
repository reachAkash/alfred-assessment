import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Order: React.FC = () => {
  const navigate = useNavigate();
  const [orderStatus, setOrderStatus] = useState<boolean>(false);
  const orderItems = useSelector((store: RootState) => store.cart.orderItems);

  useEffect(() => {
    setTimeout(() => {
      setOrderStatus(true);
    }, 2000);
  }, []);

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
      {orderItems.length > 0 ? (
        <div className="space-y-3">
          {orderItems?.map((item: any, idx: number) => {
            console.log(item);
            return (
              <div className="flex items-start justify-between border-b border-gray-500 py-4 gap-4">
                <div className="font-semibold text-2xl">{idx + 1}.</div>
                <div className="w-[60%] text-start">
                  <div className=" font-semibold text-xl">Items</div>
                  {item?.map((food: any) => {
                    return <div>{food?.item}</div>;
                  })}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl">Status</div>
                  <div>
                    {orderStatus ? (
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
      ) : (
        <div className="h-[53vh] flex flex-col items-center justify-center space-y-3">
          <div className="font-semibold text-2xl">No Orders Yet!</div>
          <div
            onClick={() => navigate("/")}
            className="bg-black text-white px-4 py-2 rounded-full w-fit"
          >
            Feeling Hungry?
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
