import React from "react";
import { jobCategories } from "../../utils";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { PiBagFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Jobs_boxes: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 items-center ">
      <p className="text-2xl  1000px:text-3xl font-semibold">Jobs of the day</p>
      <p className="text-sm 800px:text-[16px] 1000px:text-lg text-gray-500 font-semibold">
        Search and connect with the right candidates faster.
      </p>
      <div className="flex gap-2 1000px:gap-4 flex-wrap justify-center mt-6 items-center">
        {jobCategories.slice(0, 6)?.map((category: string): JSX.Element => {
          return (
            <div
              className="py-1 px-2 text-sm  rounded-md shrink-0 text-primary border-2 border-gray-300 hover:border-primary  transition-all duration-300 cursor-pointer "
              key={category}
            >
              {category}
            </div>
          );
        })}
      </div>

      {/* dob boxes  */}
      <div className="w-full mt-6 gap-3   flex-col grid 700px:grid-cols-2 1400px:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((index: number): JSX.Element => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full  group cursor-pointer hover:-translate-y-2 transition-all duration-200 bg-slate-100 border-2 border-gray-200 rounded-md overflow-hidden p-2"
              key={index}
            >
              {/* company detail  */}
              <div className="flex w-full gap-3 items-center">
                <img
                  className="h-14 w-14 "
                  src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/brands/brand-1.png"
                  alt=""
                />
                <div className="">
                  <p className=" font-bold ">LinkedIn</p>
                  <div className="text-gray-500 flex items-center gap-1  ">
                    <CiLocationOn className="text-xl" />
                    <p className="text-sm">Gurgaon</p>
                  </div>
                </div>
              </div>
              {/* job detail  */}
              <div>
                <div className="mt-2 font-semibold">Full Stack Engineer</div>
                <div className="mt-1 flex gap-2">
                  <div className="flex bg-white shadow-md gap-1 text-sm px-2  py-1  rounded-md items-center text-gray-500">
                    <PiBagFill />
                    <p>Part time</p>
                  </div>
                  <div className="flex bg-white shadow-md gap-1 text-sm px-2  py-1  rounded-md items-center text-gray-500">
                    <CiTimer />
                    <p>5 minute ago</p>
                  </div>
                </div>
                <p className="py-2 text-gray-600 text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis necessitatibus, impedit doloribus iusto incidunt
                  vero aliquam nisi. Corrupti, hic est!
                </p>

                <div className="mt-1 flex gap-2">
                  <div className="flex bg-white shadow-md gap-1 text-sm px-2  py-1  rounded-md items-center text-gray-500">
                    <PiBagFill />
                    <p>Part time</p>
                  </div>
                  <div className="flex bg-white shadow-md gap-1 text-sm px-2  py-1 rounded-md items-center text-gray-500">
                    <CiTimer />
                    <p>5 minute ago</p>
                  </div>
                </div>

                {/* requirements  */}
                <div className="flex gap-2 items-center text-primary cursor-pointer underline mt-4 ">
                  <div>Requirements</div> <FaAngleDown />
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  react js, mongodb,node js,{" "}
                  <span className="text-green-500 cursor-pointer font-normal">
                    more...
                  </span>{" "}
                </div>

                <div className="mt-4 flex gap-2">
                  <div className="text-sm font-semibold bg-green-200 py-1 px-4 rounded-md text-green-600">
                    250K - 350K year Salary
                  </div>
                </div>

                <div className="flex">
                  {" "}
                  <div className="text-green-600 shadow-md mb-2 shadow-[#000000a9] ml-auto bg-green-200 px-8  py-1 rounded-md group-hover:text-white group-hover:bg-green-500 ">
                    View
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs_boxes;
