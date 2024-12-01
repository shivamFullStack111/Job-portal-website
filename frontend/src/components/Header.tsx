import { useEffect, useState } from "react";
import Logo from "../images/Logo.png";
import { motion, MotionProps } from "framer-motion";
import { FaAngleDown, FaUserAlt } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

const Header: React.FC = () => {
  const [scroll, setscroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscroll(window.scrollY);
    });
  }, []);

  return (
    <>
      {/* desktop header  */}
      <div className="hidden  z-50 1000px:block">
        {" "}
        <div
          style={{
            backgroundColor: scroll > 10 ? "white" : "transparent",
          }}
          className="h-16   fixed top-0 left-0 px-[10px] z-50  600px:px-[40px] 1000px:px-[81px]  flex items-center justify-between  w-full"
        >
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <img className="h-10 w-16  " src={Logo} alt="" />
              <div className="relative ">
                <motion.div
                  initial={{ width: "100%", height: "100%" }}
                  animate={{ width: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full h-full bg-primary"
                ></motion.div>
                <div className="flex items-center text-black font-semibold text-lg px-1">
                  {" "}
                  job{" "}
                  <p className="text-2xl  pacifico-regular ml-1 text-primary">
                    {" "}
                    f
                  </p>
                  <span className="underline decoration-primary">inder</span>
                </div>
              </div>
              {/* navigations  */}
              <div className="flex items-center ml-10 text-sm font-semibold cursor-pointer gap-6">
                <div className="border-b-2 border-white hover:border-primary transition-all duration-300">
                  Home
                </div>

                {navgations?.map((navigation: NavigationsType, i: number) => {
                  return <Employes key={i} index={i} navigation={navigation} />;
                })}
                <div className="border-b-2 border-white hover:border-primary transition-all duration-300">
                  Contact
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="px-5 hover:text-green-200 cursor-pointer flex gap-2 items-center font-semibold text-sm py-2 rounded-lg text-white bg-primary"
            >
              <FaUserAlt /> Login
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="px-5 hover:text-green-200 cursor-pointer flex gap-2 items-center font-semibold text-sm py-2 rounded-lg text-white bg-primary"
            >
              <GrDocumentUser /> Register
            </motion.div>
          </div>
        </div>
      </div>

      {/* mobile header  */}
      <div className="h-16 block 1000px:hidden w-full fixed top-0 left-0 bg-gray-300 blur-sm"></div>
    </>
  );
};

export default Header;

interface EmployesProps {
  navigation: NavigationsType;
  index: number;
}
const Employes: React.FC<EmployesProps> = (props: EmployesProps) => {
  const [isHovered, setisHovered] = useState<boolean>(false);
  const [isListVisible, setisListVisible] = useState(false);

  const listContainerAnimation: MotionProps = {
    initial: { y: -10, opacity: 0 },
    animate: { y: isHovered ? 10 : -10, opacity: isHovered ? 1 : 0 },
    transition: { duration: 0.7 },
  };

  const ButtonAnimation: MotionProps = {
    initial: { y: 10, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.3 * props.index },
  };

  return (
    <div
      onMouseEnter={(): void => {
        setisHovered(true);
        setisListVisible(true);
      }}
      onMouseLeave={(): void => {
        setisHovered(false);
        setTimeout(() => {
          setisListVisible(false);
        }, 2000);
      }}
      className="group relative border-b-2 border-white hover:border-primary transition-all duration-300"
    >
      <motion.div {...ButtonAnimation} className="flex items-center gap-2">
        {" "}
        <p> {props?.navigation?.title}</p> <FaAngleDown />
      </motion.div>

      {isListVisible && (
        <motion.div
          {...listContainerAnimation}
          className="absolute  w-[200px] rounded-md  bg-gray-200 p-1 "
        >
          <p className="w-full hover:bg-green-100 p-1 px-2 border-b-2 border-gray-200 bg-white">
            {" "}
            Post job
          </p>
          <p className="w-full hover:bg-green-100 p-1 px-2 border-b-2 border-gray-200 bg-white">
            {" "}
            Post job
          </p>
          <p className="w-full hover:bg-green-100 p-1 px-2 border-b-2 border-gray-200 bg-white">
            {" "}
            Post job
          </p>
          <p className="w-full hover:bg-green-100 p-1 px-2 border-b-2 border-gray-200 bg-white">
            {" "}
            Post job
          </p>
        </motion.div>
      )}
    </div>
  );
};

interface NavigationsType {
  title: string;
  links: Array<{
    title: string;
    to: string;
  }>;
}

const navgations: NavigationsType[] = [
  {
    title: "Emplayes",
    links: [
      {
        title: "create user",
        to: "/",
      },
    ],
  },
  {
    title: "Candidate",
    links: [
      {
        title: "create user",
        to: "/",
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        title: "create user",
        to: "/",
      },
    ],
  },
] as const;
