import React from "react";
import FoodSlider, { PopularItemSlider, RestrauntSlider } from "./FoodSlider";
import Navbar from "./Navbar";
import NavFooter from "./NavFooter";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container space-y-5">
        <FoodSlider />
        <PopularItemSlider />
        <RestrauntSlider />
      </div>
      <NavFooter />
    </>
  );
};

export default Home;
