import React, { useContext } from "react";
import Typical from "react-typical";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import '../index.css';
import Dark from "../utils/ThreeCube";
import Light from "../utils/ThreeCube1";


const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log("darkMode", darkMode)
  const toggle = localStorage.getItem('toggle')
  console.log("toggle", toggle)

  return (
    <>
      <div>
        <div>
          {darkMode ? <Light /> : <Dark />}
          <main
            className="mx-12 max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
            id="/"
          >
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <motion.span
                  className={darkMode ? "block text-black" : " text-white"}
                >
                  Hi, I am Prajyot
                </motion.span>
                <div className="flex">
                  <span className="block text-blue-500 z-0 lg:inline">
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
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                  <Link className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
