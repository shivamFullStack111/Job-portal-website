import { motion, MotionProps } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import backImage from "../../images/homeLogo.png";
import { itCities, jobCategories } from "../../utils";




const HomeImageContainer: React.FC = () => {
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const [isCatDivFocus, setisCatDivFocus] = useState<boolean>(false);
  const imageAnimation: MotionProps = {
    initial: {
      scale: 0.7,
    },
    whileInView: {
      scale: 1,
    },
    transition: { duration: 1 },
  };


  useEffect(() => {
    let interval: number;

    if (!isCatDivFocus) {
      // Only start scrolling animation if not focused
      interval = setInterval(() => {
        if (categoryRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = categoryRef.current;

          // Check if full scroll has been reached
          if (scrollLeft + clientWidth >= scrollWidth) {
            categoryRef.current.scrollLeft = 0; // Reset scroll to start
          } else {
            categoryRef.current.scrollLeft = scrollLeft + 0.8; // Scroll by 1 unit
          }
        }
      }, 50);
    }

    return () => {
      if (interval) clearInterval(interval); // Clean up interval
    };
  }, [isCatDivFocus]);

  const jobCatAnimation: MotionProps = {
    initial: { width: 0, opacity: 1 },
    whileInView: { width: "auto", opacity: 1 },
    transition: { duration: 2 },
  };

  return (
    <div
      className="600px:h-[50vh] z-20   mt-16 800px:mt-24 1000px:mt-28   flex  justify-center flex-col-reverse 600px:grid   600px:grid-cols-2"
    >
      {/* left  */}
      <div className="flex flex-col w-full justify-center 600px:items-center">
        {/* text  */}
        <div className="text-[6vw] 600px:text-[4vw] 1000px:text-[3vw]  font-bold text-gray-900">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 10, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="leading-tight w-full"
          >
            <p className="600px:inline">Search Between</p>{" "}
            <p className="inline">More Then</p>{" "}
            <span className="px-2 h-full bg-green-200 text-primary">
              50,000
            </span>{" "}
            <p className="600px:inline"> Open Jobs.</p>
          </motion.div>
          {/* <div>
              Trending Jobs Keywords: Web Designer Web Developer IOS Developer
              Android Developer
            </div> */}
        </div>
        {/* trending jobs  */}
        <div className="w-full mt-6">
          <div className="flex items-center">
            {" "}
            {Array.from(typingText)?.map(
              (text: string, index: number): JSX.Element => {
                return (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0, delay: 0.1 * index }}
                    key={index}
                    className={`text-black overflow-hidden font-semibold  font-mono tracking-tighter`}
                  >
                    {text === " " ? <span>&nbsp;</span> : text}
                  </motion.div>
                );
              }
            )}
          </div>
          <motion.div
            onMouseEnter={() => setisCatDivFocus(true)}
            onMouseLeave={() => setisCatDivFocus(false)}
            ref={categoryRef}
            {...jobCatAnimation}
            className="flex overflow-x-scroll hide  overflow-hidden items-center w-full gap-3"
          >
            {jobCategories?.slice(0, 5)?.map((job: string): JSX.Element => {
              return (
                <p
                  className="px-2 py-1 bg-green-100 hover:text-green-600 shrink-0 text-primary text-sm cursor-pointer"
                  key={job}
                >
                  {job}
                </p>
              );
            })}
          </motion.div>
        </div>
        {/* search bar  */}
        <SearchBar />
      </div>

      {/* right  */}
      <motion.div
        {...imageAnimation}
        style={{ backgroundImage: `url('${backImage}')` }}
        className="h-[30vh]  600px:h-full w-full bg-contain  bg-center bg-no-repeat"
      ></motion.div>
    </div>
  );
};

export default HomeImageContainer;

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

const typingText: string = "Trending Jobs Keywords:" as const;
