import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
// import { motion } from "framer-motion";
import { project } from "../utils/constants";
import Card from "../components/Card"

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#ffe0e5" : "#4a4632"
  const cl = darkMode ? "black" : "white"

  return (
    <div
      id="projects"
      style={{ margin: "-2.5rem 0rem -4rem -1rem", backgroundColor:bg, color:cl, paddingBottom:"5rem"}}
    >
      <div className="mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <div style={{display:"grid", gridTemplateColumns:"auto auto", justifyItems:"center", marginTop:"3rem"}}>
          {project.map((proj) => (
            <Card proj={proj} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
