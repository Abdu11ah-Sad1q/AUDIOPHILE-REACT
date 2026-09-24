import React from "react";
import Person from "../components/Person.jsx";
import Links from "../components/Links.jsx";
import { Link } from "react-router-dom";
const Speaker = () => {
  return (
    <div className="h-auto w-full flex flex-col gap-20 justify-center items-center  ">
      <div className="h-[40vh] w-full bg-black flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">SPEAKERS</h1>
      </div>
      <div className="h-screen w-full  p-5 flex gap-40">
        <div className="bg-[url('/images/category-speakers/desktop/image-zx9.jpg')] h-full w-1/2  bg-cover bg-center bg-no-repeat rounded-lg"></div>
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-sm tracking-[0.5rem] text-amber-500 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl font-bold">ZX9 SPEAKER</h1>
          <p className="text-md text-gray-500">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link
            to="/speaker/zx9"
            className="h-10 flex items-center justify-center w-1/3 text-sm text-white  tracking-wider bg-amber-600 hover:bg-amber-400"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className="h-screen w-full  p-5 flex gap-40">
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-sm tracking-[0.5rem] text-amber-500 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl font-bold">ZX7 SPEAKER</h1>
          <p className="text-md text-gray-500">
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>
          <Link
            to="/speaker/zx7"
            className="h-10 flex items-center justify-center w-1/3 text-sm text-white  tracking-wider bg-amber-600 hover:bg-amber-400"
          >
            SEE PRODUCT
          </Link>
        </div>
        <div className="bg-[url('/images/category-speakers/desktop/image-zx7.jpg')] h-full w-1/2  bg-cover bg-center bg-no-repeat rounded-lg"></div>
      </div>
      <Links />
      <Person />
    </div>
  );
};

export default Speaker;
