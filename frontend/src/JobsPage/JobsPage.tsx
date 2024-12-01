import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mail_us from "../home/home-components/Mail_us";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { itCities, jobCategories } from "../utils";

import job1 from "../images/job1.png";
import job2 from "../images/job2.png";

const JobsPage: React.FC = () => {
  return (
    <div className="px-[10px]  600px:px-[40px] 1000px:px-[81px]">
      <Header />
      <HomeImageContainer />
      <Mail_us />
      <Footer />
    </div>
  );
};

export default JobsPage;

const HomeImageContainer: React.FC = () => {
  return (
    <div className=" min-h-[200px] 600px:min-h-[250px] z-20    mt-16 800px:mt-24 1000px:mt-28   flex  justify-center ">
      <div className="w-full h-full py-6  min-h-[200px] 600px:min-h-[250px]  bg-green-100 p-2 rounded-md flex flex-col items-center">
        <p className="text-lg font-semibold 800px:text-2xl 1000px:text-3xl ">
          <span className="text-primary">22 Jobs</span> Available Now
        </p>
        <div className="w-[70%] relative text-center mt-4 leading-none text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          repellendus magni, atque delectus molestias quis?
          <div className="absolute w-full top-10 ">
            <SearchBar />
          </div>
        </div>
        <div className="flex w-full justify-between mt-auto px-3">
          <img src={job1} className="h-32 w-44 " />
          <img src={job2} className="h-32 w-44 " />
        </div>
      </div>
    </div>
  );
};

const SearchBar: React.FC = () => {
  const [searchInput, setsearchInput] = useState<string>("");
  const [selectedLocation, setselectedLocation] = useState<string>("");
  const [searchCategoriesSuggestion, setsearchCategoriesSuggestion] = useState<
    string[]
  >([]);

  useEffect(() => {
    const timeout: number = setTimeout(() => {
      const searchCategories = jobCategories.filter((category: string) =>
        category.toLowerCase().includes(searchInput?.toLowerCase())
      );

      setsearchCategoriesSuggestion(searchCategories);
    }, 300);

    return (): void => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  return (
    <>
      {" "}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="text-sm h-14 mt-8 bg-gray-300 rounded-3xl p-1"
      >
        <div className="bg-white w-full h-full grid grid-cols-3  rounded-3xl  items-center">
          <div className="rounded-l-3xl  relative border-r-2 w-full h-full border-gray-300 flex justify-center ">
            <input
              value={searchInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setsearchInput(e.target.value);
              }}
              type="text"
              className="outline-none caret-primary text-gray-500 rounded-l-3xl w-full px-2"
              placeholder="Search job..."
            />
            {searchCategoriesSuggestion?.length && searchInput ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="shrink-0  left-6 flex justify-center absolute top-14 "
              >
                <div className=" shrink-0 z-30 rounded-md  overflow-hidden bg-gray-300 p-[3px] max-h-[200px] overflow-y-scroll hide">
                  {searchCategoriesSuggestion?.map(
                    (cat: string): JSX.Element => {
                      return (
                        <p
                          onClick={() => {
                            setsearchInput(cat);
                          }}
                          key={cat}
                          className="py-1  shrink-0 px-2 bg-white hover:bg-green-200 w-full text-sm border-b-2 border-gray-300 cursor-pointer "
                        >
                          {cat}
                        </p>
                      );
                    }
                  )}
                </div>
              </motion.div>
            ) : null}
          </div>
          <div className="rounded-l-3xl border-r-2 w-full h-full border-gray-300 flex justify-center ">
            <select
              value={selectedLocation}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setselectedLocation(e.target.value)
              }
              className="outline-none bg-white hide w-full text-gray-500"
              name=""
              id=""
            >
              <option value="Location">Location</option>
              {itCities.map((city: string): JSX.Element => {
                return (
                  <option value={city} key={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
          {/* <div className="rounded-l-3xl border-r-2 w-full h-full border-gray-300 flex justify-center "></div> */}
          <div className="rounded-r-3xl  w-full h-full flex justify-center items-center bg-primary text-white text-xl font-semibold cursor-pointer hover:bg-green-400 ">
            Search
          </div>
        </div>
      </motion.div>
    </>
  );
};
