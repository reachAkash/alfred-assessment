import React from "react";
import RestrauntData from "@/data/restraunts.json";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FoodSlider: React.FC = () => {
  const foodItems1 = RestrauntData.restaurants[0]?.menu;
  const foodItems2 = RestrauntData.restaurants[1]?.menu;
  const FoodArray = [...foodItems1, ...foodItems2];
  console.log(FoodArray);

  return (
    <div className="space-y-4">
      <div className="font-semibold text-xl">Foods</div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true} // Enable infinite looping
        className=" w-full"
        breakpoints={{
          // Up to 767px (mobile size)
          0: {
            slidesPerView: 4, // Show only 1 card on mobile
          },
          // Above 1024px (desktop size)
          1024: {
            slidesPerView: 8, // Show 3 cards on desktop (default)
          },
        }}
      >
        {FoodArray?.map((item) => {
          return (
            <SwiperSlide>
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
  const FoodArray = RestrauntData.restaurants[3]?.menu;
  return (
    <div className="space-y-4">
      <div className="font-semibold text-xl">Popular Item</div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={-30}
        loop={true} // Enable infinite looping
        className=" w-full"
        breakpoints={{
          // Up to 767px (mobile size)
          0: {
            slidesPerView: 1, // Show only 1 card on mobile
          },
          // Above 1024px (desktop size)
        }}
      >
        {FoodArray?.map((item) => {
          return (
            <SwiperSlide>
              <div
                onClick={() => navigate("/food-item")}
                className="image-container relative flex text-sm text-center flex-col items-center justify-center"
              >
                <img
                  className="popular-image rounded-lg"
                  src={item?.image}
                  alt={item?.item}
                />
                <div className="absolute flex flex-col h-full w-full py-4 px-10 text-start justify-between text-white top-0 left-0">
                  <div className="text-2xl font-semibold">{item?.item}</div>
                  <div className="space-y-4">
                    <div className="text-lg">Rs. 130</div>
                    <div className="w-full flex items-center justify-between">
                      <button className="bg-white px-8 py-3 rounded-full text-black">
                        Add to Cart
                      </button>
                      <span className="p-3 bg-gray-100 rounded-full">
                        <IoChatbubbleEllipsesOutline className="text-2xl text-black" />
                      </span>
                      <span className="p-3 bg-gray-100 rounded-full">
                        <FaHeart className="text-2xl text-black" />
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

export default FoodSlider;
