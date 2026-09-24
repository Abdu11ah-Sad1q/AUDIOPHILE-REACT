import React from "react";
import { Link } from "react-router-dom";
const Earphone = () => {
  return (
    <div className=" rounded-lg w-full h-[65vh] flex  mt-20 gap-10">
      <div className="bg-[url('/images/home/desktop/image-earphones-yx1.jpg')] rounded-lg bg-cover w-1/2 h-full bg-center bg-no-repeat border border-black"></div>
      <div className=" w-1/2 h-full  rounded-lg flex flex-col justify-center items-start bg-gray-100 text-white gap-5 px-20">
        <h1 className="text-3xl text-black  font-bold">YX1 EARPHONES</h1>
        <Link
          to="/earphone"
          className=" flex items-center justify-center bg-transparent text-xs tracking-[2px] font-bold text-black border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors duration-300 w-1/3 h-12"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default Earphone;
