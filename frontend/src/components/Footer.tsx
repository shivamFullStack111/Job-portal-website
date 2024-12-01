import { motion } from "framer-motion";
import Logo from "../images/Logo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import scanner from "../images/scanner.png";

const Footer: React.FC = () => {
  return (
    <div className="w-full mt-16 mb-6 grid gap-4 900px:grid-cols-[3fr,1fr,1fr,1fr,2fr] ">
      <div className=" ">
        <div className="flex">
          {" "}
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
              <p className="text-2xl  pacifico-regular ml-1 text-primary"> f</p>
              <span className="underline decoration-primary">inder</span>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-[300px] max-900px:max-w-64  text-sm  text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nulla asperiores architecto, praesentium mollitia vel.
        </p>
        <div className="flex gap-2 mt-4 items-center">
          <div className="rounded-full bg-white text-2xl  text-primary">
            <FaFacebook />
          </div>
          <div className="rounded-full bg-primary  text-lg p-1  text-white">
            <FaTwitter />
          </div>
          <div className="rounded-full bg-primary  text-lg p-1  text-white">
            <LiaLinkedinIn />
          </div>
          <div className="rounded-full bg-primary  text-lg p-1  text-white">
            <RiInstagramFill />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-lg">Resources</p>
        <a
          href="#main-div"
          className="mt-6 text-gray-500 hover:text-primary block cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500"
        >
          Welcome
        </a>
        <a
          href="#jobs"
          className="text-sm mt-1 text-gray-500 hover:text-primary block cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500"
        >
          Jobs
        </a>
        <a
          href="#our-users"
          className="text-sm mt-1 text-gray-500 hover:text-primary block cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500"
        >
          Our users
        </a>
        <a
          href="#mail-us"
          className="text-sm mt-1 text-gray-500 hover:text-primary block cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500"
        >
          Mail us
        </a>
      </div>
      <div>
        <p className="font-semibold text-lg">Community</p>
        <p className="mt-6 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Welcome
        </p>
        <p className="text-sm mt-1 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Jobs
        </p>
        <p className="text-sm mt-1 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Our users
        </p>
        <p className="text-sm mt-1 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Mail us
        </p>
      </div>
      <div>
        <p className="font-semibold text-lg">Quick links</p>
        <p className="mt-6 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Welcome
        </p>
        <p className="text-sm mt-1 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Jobs
        </p>
        <p className="text-sm mt-1 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Our users
        </p>
        <p className="text-sm mt-1 text-gray-500 hover:text-primary cursor-pointer border-b-2 border-white hover:border-primary transition-all duration-500">
          Mail us
        </p>
      </div>
      <div className="flex flex-col  items-center">
        <img src={scanner} alt="" />
        <p
          onClick={() => {
            const whatsappURL = `https://wa.me/?text=Check this out! ${scanner}`;
            window.open(whatsappURL, "_blank");
          }}
          className="text-sm cursor-pointer font-semibold text-primary"
        >
          Share and vist our website
        </p>
      </div>
    </div>
  );
};

export default Footer;
