import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";

import LocomotiveScroll from "locomotive-scroll";
import JobsPage from "./JobsPage/JobsPage";

const locomotiveScroll = new LocomotiveScroll();

const App: React.FC = () => {
  console.log(locomotiveScroll);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
