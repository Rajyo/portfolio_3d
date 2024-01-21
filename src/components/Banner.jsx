import React, { useContext } from "react";
import Typical from "react-typical";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import '../index.css';


const Banner = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="sm:mx-auto m-0">
        <main className="sm:mx-6 md:mx-12 w-full px-2 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen absolute top-0 sm:w-[55%] md:w-[45%] flex-wrap">
          <div className="sm:text-center lg:text-left mt-[-4rem]">
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl px-1">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Prajyot
              </motion.span>
              <div className="flex">
                <span className="block my-10 sm:my-8 lg:my-4 xl:my-2 text-blue-500 z-0 lg:inline">
                  <Typical
                    steps={[
                      "Front End Developer",
                      1000,
                      "Back End Developer",
                      1000,
                      "Full Stack Developer",
                      1000,
                    ]}
                    loop={Infinity}
                  />
                </span>
              </div>

            </h1>
            <div className="mt-10 sm:mt-8 sm:flex sm:justify-center cursor-pointer w-18 px-6 py-2 text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 hover:text-black md:py-2 md:text-lg sm:ml-20 md:ml-38 lg:ml-0" style={{ position: "absolute" }}>
              <a href="http://tinyurl.com/PrajyotResume" target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Banner;
