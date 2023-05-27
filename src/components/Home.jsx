import React from 'react';
import HeroImage from '../Assests/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-sm sm:text-base md:text-lg">
            I am new to Frontend Development and designing software. Currently, I love to work on web applications using technologies like React, Tailwind CSS, Bootstrap, Node.js, and Express.js.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm sm:text-base md:text-lg"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:pl-4">
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto md:w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;

