import React from "react";

const Person = () => {
  return (
    <div className="h-[115vh] w-full flex gap-20  mt-30 p-5">
      <div className="h-full w-1/2 flex flex-col justify-center gap-10   ">
        <h1 className="text-4xl font-bold tracking-[0.2rem] ">
          BRINGING YOU THE <span className="text-amber-500">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-gray-500 text-md">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="h-full w-1/2  rounded-lg border-black bg-cover bg-center bg-no-repeat bg-[url('/images/shared/desktop/image-best-gear.jpg')] "></div>
    </div>
  );
};

export default Person;
