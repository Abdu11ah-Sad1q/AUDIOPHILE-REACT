import headphone from "../assets/images/headphone.png";
import earphone from "../assets/images/earphone.png";
import speaker from "../assets/images/speaker.png";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="flex gap-5 w-full  h-[35vh] mt-40 p-5">
      <div className="w-1/3 h-full bg-gray-100 flex flex-col justify-center items-center rounded-lg">
        <img
          src={headphone}
          alt="headphone"
          className="z-10 h-[8rem] -mt-20 "
        />
        <h1 className="mt-5 font-bold text-black text-lg tracking-[0.2rem]">
          HEADPHONES
        </h1>
        <Link
          to="/headphone"
          className=" text-xs font-bold text-amber-500 active:bg-blue-500 "
        >
          SHOP
        </Link>
      </div>

      <div className="w-1/3 h-full bg-gray-100 flex flex-col justify-center items-center rounded-lg">
        <img src={speaker} alt="speaker" className="z-10 h-[8rem] -mt-20" />
        <h1 className="mt-5 font-bold text-black text-lg tracking-[0.2rem]">
          SPEAKERS
        </h1>
        <Link
          to="/speaker"
          className=" text-xs font-bold text-amber-500 active:bg-blue-500 "
        >
          SHOP
        </Link>
      </div>

      <div className="w-1/3 h-full bg-gray-100 flex flex-col justify-center items-center rounded-lg">
        <img src={earphone} alt="earphone" className="z-10 h-[8rem] -mt-20" />
        <h1 className="mt-5 font-bold text-black text-lg tracking-[0.2rem]">
          EARPHONES
        </h1>
        <Link
          to="/earphone"
          className=" text-xs font-bold text-amber-500 active:bg-blue-500 "
        >
          SHOP
        </Link>
      </div>
    </div>
  );
};

export default Links;
