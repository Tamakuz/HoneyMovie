"use client"
import React from "react";
import Slider from "../atomics/home/Slider";
import Popular from "../atomics/home/Popular";


const Home = () => {
  return (
    <div className="w-full h-full overflow-auto px-2 space-y-10 scrollbar-none">
      <Slider />
      <Popular />
    </div>
  );
};

export default Home;
