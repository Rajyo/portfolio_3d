import React, { useContext } from "react";
import { contactLinks, techStack, frontend, backend, database, deployment, tools, toolsAndTechnologies } from "../utils/constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#ffe28f" : "#4a4632"
  // const bg = darkMode ? "#ffe0e5" : "#4a4632"


  return (
    <div id="about" style={{ background: bg,}}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-14 pb-12">
        <h2
          className={
            darkMode
              ? "text-4xl sm:text-5xl font-bold px-4 md:px-0 text-center"
              : "sm:mt-0 sm:text-5xl text-4xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div className="flex flex-col-reverse md:flex md:flex-row" style={{ marginTop: "1rem" }}>
            <motion.div className="flex md:flex-col flex-wrap justify-between md:mr-10">
              {contactLinks.map((el, index) => (
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                  className="w-15 h-15 py-0 px-1 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 md:w-48 w-40"
                  style={{ width: "10rem" }}
                >
                  <a
                    href={el.link}
                    className="flex cursor-pointer m-2 hover:scale-105 items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="logo" src={el.url} className="w-8 h-8 ml-2" />
                    <p style={{ marginLeft: "0.75rem", fontSize: "1.1rem" }}>{el.name}</p>
                  </a>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className={darkMode ? "mt-4 text-lg md:text-xl text-justify" : "mt-4 text-lg md:text-xl text-justify text-white"} style={{ margin: "1rem 1rem" }}>
              I'm a self-taught web developer, a tech enthusiast and a product builder with a knack for tackling tough technical challenges. As a jack-of-all-trades, I can learn any technology quickly and deliver high-quality results with an eye for detail and a focus on user experience. I take pride in owning my work and always striving for excellence. When I'm not exploring the latest tech trends, you'll find me indulging in my love for music or seeking out new and creative ways to solve problems.
            </motion.div>
          </motion.div>


          <motion.div style={{ marginTop: "7rem" }}>
            <h2
              className={
                darkMode
                  ? "text-4xl sm:text-5xl font-bold px-4 md:px-0 text-center"
                  : "text-4xl sm:text-5xl font-bold px-4 md:px-0 text-center text-white"
              }
            >
              Tools and Technologies
            </h2>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 justify-between">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-1 md:py-2 md:px-4 bg-gray-50 md:m-4 mx-1 md:mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <div className="flex cursor-pointer hover:scale-105 items-center">
                  <img alt="" src={el.link} className="w-10 h-8 md:w-12 md:h-10" />
                  <h4 className="text-sm md:text-md ml-2 md:ml-4">{el.name}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React, { useContext } from "react";
// import { techStack } from "../utils/constants";
// import { ThemeContext } from "../themeProvider";
// import { motion } from "framer-motion";

// const About = () => {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"} style={{marginTop:"-5rem"}}>
//       <div className="max-w-8xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
//         {/* <h2
//           className={
//             darkMode
//               ? "text-5xl font-bold px-4 md:px-0 text-center"
//               : "text-5xl font-bold px-4 md:px-0 text-center text-white"
//           }
//         >
//           About Me
//         </h2> */}
//         <div style={{display:"flex"}}>
//           <motion.div style={{ width:"30%"}}>
//             <h4 className="mt-12 text-3xl font-semibold text-blue-500" style={{textAlign:"center"}}>
//               A bit about me
//             </h4>
//             <p
//               className={
//                 darkMode
//                   ? "mt-4 text-xl text-justify text-gray-500"
//                   : "mt-4 text-xl text-justify text-white"
//               }
//             >
//               I'm a self-taught web developer and Mobile App Developer with
//               experience in designing new features from ideation to production,
//               implementation of wireframes and design flows into high
//               performance software applications. I take into consideration the
//               user experience while writing reusable and efficient code. I
//               passionately combine good design, technology, and innovation in
//               all my projects, which I like to accompany from the first idea to
//               release.Currently, I'm focused on the backend development.
//             </p>
//           </motion.div>
//           <motion.div style={{ width:"70%"}}>
//             <h4 className="mt-12 text-3xl font-semibold text-blue-500" style={{textAlign:"center"}}>
//               Technologies and Tools
//             </h4>
//             <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
//               {techStack.map((el, index) => (
//                 <motion.div
//                   initial="hidden"
//                   whileInView={"visible"}
//                   variants={{
//                     visible: {
//                       y: 0,
//                       opacity: 1,
//                       transition: {
//                         type: "spring",
//                       },
//                     },
//                     hidden: { opacity: 1, y: 80 },
//                   }}
//                   className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
//                   style={{width:"15%"}}
//                 >
//                   <img alt="" src={el.link} className="w-5" />
//                   <h4 className="text-md ml-2">{el.name}</h4>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;