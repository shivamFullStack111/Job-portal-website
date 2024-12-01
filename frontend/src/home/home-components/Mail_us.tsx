import React, { useState } from "react";
import { IoIosMailUnread } from "react-icons/io";
import greenBackground from "../../images/greenBackground.jpg";

const Mail_us: React.FC = () => {
  const [email, setemail] = useState<string>("");

  return (
    <div
      style={{ backgroundImage: `url('${greenBackground}')` }}
      className="w-full py-10 p-2 bg-primary rounded-lg mt-6 flex-col flex justify-center items-center"
    >
      <p className="text-[20px] font-bold 1000px:text-[35px] leading-tight  text-white">
        New Things Will Always
      </p>
      <p className="text-[20px] font-bold 1000px:text-[35px] leading-tight  text-white">
        {" "}
        Update Regularly
      </p>

      <div
        className={
          "bg-white w-[90%] 600px:w-[70%] 1000px:w-[50%] items-center  text-gray-400 mt-7 p-2  flex rounded-xl"
        }
      >
        <IoIosMailUnread className="text-[40px] p-1" />
        <input
          value={email}
          onChange={(): void => {
            setemail(email);
          }}
          placeholder="Enter your email here..."
          className="outline-none w-full"
          type="email"
          required
        />
        <div className="px-3 py-2 rounded-md flex justify-center items-center bg-primary text-white font-semibold  600px:text-lg cursor-pointer hover:scale-105 transition-all duration-200">
          Subscribe
        </div>
      </div>
    </div>
  );
};

export default Mail_us;
