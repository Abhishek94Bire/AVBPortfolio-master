import React from "react";
import image from "../assets/image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg max-[520px]:mt-16 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-xl sm:text-7xl max-[760px]:mt-28 font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="py-1 max-w-md">
          Hi !!, Myself Abhishek Bire. An aspiring professional seeking a challenging post in an organization that will utilize my technical skills, logical skills and
professional experience to contribute to the organization's noble and humanitarian goals and simultaneously
provide excellent opportunities for career development and personal growth.
          </p>
          <Link to="portfolio" smooth className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div className="max-[760px]:mt-10 w-3/5">
          <img
            src={image}
            alt="my profile"
            className="rounded-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
