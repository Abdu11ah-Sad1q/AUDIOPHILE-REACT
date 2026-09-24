import React from "react";
import Person from "../components/Person.jsx";
import Links from "../components/Links.jsx";
const Earphone = () => {
  return (
    <div className="h-auto w-full flex flex-col gap-20 justify-center items-center  ">
      <div className="h-[40vh] w-full bg-black flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">EARPHONES</h1>
      </div>
      <div className="h-screen w-full  p-5 flex gap-40">
        <div className="bg-[url('/images/category-earphones/desktop/image-yx1-earphones.jpg')] h-full w-1/2  bg-cover bg-center bg-no-repeat rounded-lg"></div>
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-sm tracking-[0.5rem] text-amber-500 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl font-bold">
            YX1 WIRELESS
            <br /> EARPHONES
          </h1>
          <p className="text-md text-gray-500">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button className="h-10 w-1/3 text-sm text-white  tracking-wider bg-amber-600 hover:bg-amber-400">
            SEE PRODUCT
          </button>
        </div>
      </div>
      <Links />
      <Person />
    </div>
  );
};

export default Earphone;
