import { Link } from "react-router-dom";
import Links from "../components/Links";
import Speaker from "../components/Speaker";
import Earphone from "../components/Earphone";
import Person from "../components/Person";
const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="bg-[url('./assets/images/image-hero.jpg')] w-full min-h-screen flex items-end  bg-cover bg-center bg-no-repeat ">
        <div className="flex flex-col gap-5 text-white w-1/2  p-5 my-10">
          <h2 className="text-sm text-gray-400 font-bold tracking-[0.75rem]">
            NEW PRODUCT
          </h2>
          <h1 className="text-6xl font-bold">XX99 MARK II HEADPHONES</h1>
          <p className="text-gray-400">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to="/headphone/xx99M2"
            className=" flex items-center justify-center text-sm bg-amber-600 text-white px-3 py-2 hover:bg-amber-400 transition-colors duration-300 w-1/3 h-12"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className="min-h-[calc(300vh)] bg-white flex flex-col w-full p-5">
        <Links />
        <Speaker />
        <Earphone />
        <Person />
      </div>
    </div>
  );
};

export default Home;
