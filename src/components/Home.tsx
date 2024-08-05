import React from "react";
import FoodSlider, { PopularItemSlider } from "./FoodSlider";
import Navbar from "./Navbar";
import NavFooter from "./NavFooter";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <FoodSlider />
        <PopularItemSlider />
      </div>
      <NavFooter />
    </>
  );
};

export default Home;
