import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { project } from "../utils/constants";
import Card from "../components/Card"

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#ffe0e5" : "#4a4632"
  const cl = darkMode ? "black" : "white"

  return (
    <motion.div
      className="w-full"
      id="projects"
      style={{ margin: "-2.5rem 1rem -4rem 0rem", backgroundColor:bg, color:cl, paddingBottom:"5rem"}}
    >
      <motion.div className="mx-auto sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-4xl sm:text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <motion.div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:pl-10">
          {project.map((proj) => (
            <Card proj={proj} />
          ))}
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Projects;
