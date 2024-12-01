import React from "react";
import Header from "../components/Header";
import HomeImageContainer from "./home-components/HomeImageContainer";

import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

const Home: React.FC = () => {
  return (
    <div className="px-[10px]  600px:px-[40px] 1000px:px-[81px]   ">
      <Header />
      <HomeImageContainer />
      <div className="relative">
        {" "}
        <div
          className="h-[120vh] absolute  w-full z-10 bg-purple-400 "
        ></div>
      </div>
      <div>hiii</div>
    </div>
  );
};

export default Home;
