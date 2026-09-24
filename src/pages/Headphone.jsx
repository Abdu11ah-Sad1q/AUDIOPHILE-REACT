import React from "react";
import Person from "../components/Person.jsx";
import Links from "../components/Links.jsx";
import { Link } from "react-router-dom";
const Headphone = () => {
  return (
    <div className="h-auto w-full flex flex-col gap-20 justify-center items-center  ">
      <div className="h-[40vh] w-full bg-black flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">HEADPHONES</h1>
      </div>

      <div className="h-screen w-full  p-5 flex gap-40">
        <div className="bg-[url('/images/category-headphones/desktop/image-xx99-mark-two.jpg')] h-full w-1/2  bg-cover bg-center bg-no-repeat rounded-lg"></div>
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-sm tracking-[0.5rem] text-amber-500 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl font-bold">
            XX99 MARK II <br></br> HEADPHONES{" "}
          </h1>
          <p className="text-md text-gray-500">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link
            to="/headphone/xx99M2"
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
          <h1 className="text-3xl font-bold">
            XX99 MARK I <br></br> HEADPHONES{" "}
          </h1>
          <p className="text-md text-gray-500">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link
            to="/headphone/xx99M1"
            className="h-10 flex items-center justify-center w-1/3 text-sm text-white  tracking-wider bg-amber-600 hover:bg-amber-400"
          >
            SEE PRODUCT
          </Link>
        </div>
        <div className="bg-[url('/images/category-headphones/desktop/image-xx99-mark-one.jpg')] h-full w-1/2  bg-cover bg-center bg-no-repeat rounded-lg"></div>
      </div>

      <div className="h-screen w-full  p-5 flex gap-40">
        <div className="bg-[url('/images/category-headphones/desktop/image-xx59.jpg')] h-full w-1/2  bg-cover bg-center bg-no-repeat rounded-lg"></div>
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-sm tracking-[0.5rem] text-amber-500 "></h2>
          <h1 className="text-3xl font-bold">
            XX59 <br></br> HEADPHONES{" "}
          </h1>
          <p className="text-md text-gray-500">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link
            to="/headphone/xx59"
            className="h-10 flex items-center justify-center w-1/3 text-sm text-white  tracking-wider bg-amber-600 hover:bg-amber-400"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <Links />
      <Person />
    </div>
  );
};

export default Headphone;
