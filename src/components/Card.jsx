import React,{ useContext } from "react";
import github from "../assets/github-icon.svg";
import youtube from "../assets/youtube-icon.svg";
import bullet from "../assets/black.jpg"
import { ThemeContext } from "../themeProvider";


const Card = ({ proj }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#e9939366" : "#8c845f"
  return (
    <>
      <div className="main" style={{ backgroundColor: bg, display: "flex", flexDirection: "column", padding: "1rem", margin: "1rem 3rem 2rem 3rem", border: "1px solid whitesmoke", width: "80%", borderRadius:"5%" }}>

        <div className="head" style={{ display: "flex" }}>

          <div className="image" style={{ width: "5rem", justifySelf: "flex-start", padding: "0.65rem", }}>
            <img src={proj.image} alt="title" />
          </div>

          <div className="header-info" style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}>
            <div className="header-info-name" style={{ marginBottom: "0.5rem" }}>
              <h3 style={{ fontSize: "1.5rem" }}><b>{proj.title}</b></h3>
            </div>
            <div className="header-info-public" style={{ display: "flex" }}>
              <a href={proj.repo} target="_blank" rel="noreferrer">
                <div className="live" style={{ display: "flex", margin: "0rem 2rem 0rem 1rem", alignItems: "center" }}>
                  <img src={github} alt="live" style={{ width: "1rem", height: "1rem", marginRight: "0.25rem",}} />
                  <h5>Check Repo</h5>
                </div>
              </a>
              {proj.demo &&
              <a href={proj.demo} target="_blank" rel="noreferrer">
                <div className="repo" style={{ display: "flex", alignItems: "center" }}>
                  <img src={youtube} alt="repo" style={{ width: "1rem", height: "1rem", marginRight: "0.25rem",}} />
                  <h5>Live Demo</h5>
                </div>
              </a>}
            </div>
          </div>

        </div>


        <div className="tags" style={{ margin: "1.5rem 0rem" }}>
          {proj.tags.map((item) => (
            <span style={{ fontSize: "0.8rem", padding: "0.1rem 0.5rem", backgroundColor: "rgb(49 93 185 / 65%)", margin: "0rem 0.25rem", borderRadius: "10%", boxShadow: "8px 8px 10px rgba(191,197,213,0.2)", color: "white", textTransform: "uppercase", wordWrap:"break-word", display:"inline-block"}}>{item}</span>
          ))}
        </div>


        <div className="info">
          {proj.info.map((item) => (
            <ul style={{ display: "flex", marginLeft: "0.5rem", alignItems: "baseline", padding: "0rem 1rem"}}>
              <img src={bullet} alt="bullet" style={{ width: "0.35rem", height: "0.35rem", borderRadius: "50%", marginRight: "0.5rem" }} />
              <li>{item}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

// import React from "react";
// import { motion } from "framer-motion";

// const Card = () => {
//   return (
//     <motion.div
//       initial={"hidden"}
//       whileInView={"visible"}
//       variants={{
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 },
//       }}
//       class="bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
//     >
//       <div class="p-5">
//         <a href="helo">
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             Noteworthy technology acquisitions 2021
//           </h5>
//         </a>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default Card;
