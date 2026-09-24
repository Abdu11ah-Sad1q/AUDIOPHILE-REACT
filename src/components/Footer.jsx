import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/images.png";
import twitter from "../assets/images/twitter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 2. Import the specific icon you want to use
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col gap-10  w-full p-5 mt-100">
      <div className="flex gap-10 w-full justify-between py-10">
        <h1 className="text-3xl font-bold">audiophile</h1>
        <div className="flex justify-center items-center text-sm tracking-[0.12rem] gap-10 font-bold">
          <Link to="/">HOME</Link>
          <Link to="/headphone">HEADPHONES</Link>
          <Link to="/speaker">SPEAKERS</Link>
          <Link to="/earphone">EARPHONES</Link>
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2 text-md text-gray-400 flex flex-col gap-10">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="w-1/2 flex  justify-end gap-5 items-center">
          <a href="#">
            <img src={facebook} alt="facebook" className="w-8 h-8" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" className="w-8 h-8" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
