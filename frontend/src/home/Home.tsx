import React from "react";
import Header from "../components/Header";
import HomeImageContainer from "./home-components/HomeImageContainer";
import Jobs_boxes from "./home-components/Jobs_boxes";
import CompanySlider from "./home-components/CompanySlider";
import Mail_us from "./home-components/Mail_us";

const Home: React.FC = () => {
  return (
    <div className="px-[10px]  600px:px-[40px] 1000px:px-[81px]   ">
      <Header />
      <HomeImageContainer />

      <Jobs_boxes />
      <CompanySlider />
      <Mail_us />
    </div>
  );
};

export default Home;
