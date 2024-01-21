import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { project } from "../utils/constants";
import Card from "../components/Card"

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#ffe28f" : "#4a4632"
  const cl = darkMode ? "black" : "white"

  return (
    <motion.div
      className="w-full py-10"
      id="projects" 
      style={{ backgroundColor:bg, color:cl}}
    >
      <motion.div className="">
        <h2 className="text-4xl sm:text-5xl font-bold text-center">
          Projects
        </h2>
        <motion.div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-16 md:grid-cols-2 max-w-[90%] lg:max-w-[85%] m-auto">
          {project.map((proj) => (
            <Card proj={proj} />
          ))}
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Projects;
