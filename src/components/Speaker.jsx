import React from "react";
import { Link } from "react-router-dom";
const Speaker = () => {
  return (
    <div className="bg-[url('./assets/images/image-speaker-zx7.jpg')] rounded-lg bg-cover bg-center bg-no-repeat w-full h-[65vh] flex flex-col justify-center items-start text-white gap-5 mt-20 px-20">
      <h1 className="text-3xl text-black  font-bold">ZX7 SPEAKER</h1>
      <Link
        to="/speaker/zx7"
        className=" flex items-center justify-center bg-transparent text-xs tracking-[2px] font-bold text-black border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors duration-300 w-1/6 h-12"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
};

export default Speaker;
