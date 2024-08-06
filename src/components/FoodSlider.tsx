import React from "react";
import RestrauntData from "@/data/restraunts.json";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  IoChatbubbleEllipsesOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentRes, updateCurrentItem } from "@/redux/foodSlice";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

const FoodSlider: React.FC = () => {
  const foodItems1 = RestrauntData.restaurants[0]?.menu;
  const foodItems2 = RestrauntData.restaurants[1]?.menu;
  const FoodArray = [...foodItems1, ...foodItems2];

  return (
    <div className="space-y-4">
      <div className="font-semibold text-xl">Foods</div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className=" w-full"
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        {FoodArray?.map((item) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <div className="flex w-full text-sm text-center flex-col items-center justify-center">
                <img
                  className="w-14 h-14 flex-shrink-0 rounded-full"
                  src={item?.image}
                  alt={item?.item}
                />
                {item?.item}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export const PopularItemSlider: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const FoodArray = RestrauntData.restaurants[3]?.menu;

  const handleAddToCurrent = (item: any) => {
    console.log(item);
    dispatch(updateCurrentItem(item));
  };

  const handleToast = (data: string, desc: string) => {
    toast(data, {
      description: desc,
      action: {
        label: "Undo",
        onClick: () => console.log("undo"),
      },
    });
  };

  return (
    <div className="space-y-4">
      <div className="font-semibold text-xl">Popular Item</div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={-30}
        loop={true}
        className="relative left-[-1rem] w-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {FoodArray?.map((item) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <div
                onClick={() => {
                  navigate("/food-item");
                  handleAddToCurrent(item);
                }}
                className="image-container relative flex text-sm text-center flex-col items-center justify-center"
              >
                <img
                  className="popular-image rounded-3xl"
                  src={item?.image}
                  alt={item?.item}
                />
                <div className="absolute flex flex-col h-full w-full py-4 px-10 text-start justify-between text-white top-0 left-0">
                  <div className="text-2xl font-semibold">{item?.item}</div>
                  <div className="space-y-4">
                    <div className="text-lg">Rs. {item?.price}</div>
                    <div className="w-full flex items-center justify-between">
                      <button
                        onClick={() => handleAddToCurrent(item)}
                        className="bg-white px-10 py-3 rounded-full text-black"
                      >
                        View Item
                      </button>
                      <span
                        onClick={(e) => {
                          handleToast(
                            "Feature Coming Soon!",
                            "Thank you for your patience..."
                          );
                          e.stopPropagation();
                        }}
                        className="p-3 bg-gray-100 rounded-full"
                      >
                        <IoChatbubbleEllipsesOutline className="text-2xl text-black" />
                      </span>
                      <span
                        onClick={(e) => {
                          handleToast(
                            "Feature Coming Soon!",
                            "Thank you for your patience..."
                          );
                          e.stopPropagation();
                        }}
                        className="p-3 bg-gray-100 rounded-full"
                      >
                        <FaHeart className="text-2xl text-black active:text-red-500" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export const RestrauntSlider: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RestrauntArray = RestrauntData.restaurants;

  const handleAddToCurrent = (item: any) => {
    dispatch(currentRes(item));
  };

  return (
    <div className="space-y-4 pb-28">
      <div className="font-semibold text-xl">Popular Restraunts</div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={-30}
        loop={true}
        className="relative left-[-1rem] w-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {RestrauntArray?.map((item) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <div
                onClick={() => {
                  navigate("/res-menu");
                  handleAddToCurrent(item);
                }}
                className="image-container relative flex text-sm text-center flex-col items-center justify-center"
              >
                <img
                  className="popular-image rounded-3xl"
                  src={item?.resImage}
                  alt={item?.name}
                />
                <div className="absolute flex flex-col h-full w-full py-4 px-10 text-start justify-between text-white top-0 left-0">
                  <div className="text-2xl font-semibold">{item?.name}</div>
                  <div className="space-y-4">
                    <div className="text-lg flex items-center gap-2">
                      <IoLocationOutline className="text-2xl" />
                      {item?.location}
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <button
                        onClick={() => {
                          navigate("res-menu");
                          handleAddToCurrent(item);
                        }}
                        className="bg-white px-8 py-3 rounded-full text-black w-full"
                      >
                        View Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FoodSlider;
