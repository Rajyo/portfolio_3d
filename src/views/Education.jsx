import React, { useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educations } from "../utils/constants";
import { ThemeContext } from "../themeProvider";


const EducationCard = ({ education }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const bg = darkMode ? "#e9939366" : "#8c845f"
    const cl = darkMode ? "black" : "white"
    const clr = darkMode ? "grey" : "#212121eb"
    const bRight = darkMode ? "0.5rem solid #e9939366" : "0.5rem solid #8c845f"
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: bg,
                color: cl,
                borderRadius: "1rem",
            }}
            contentArrowStyle={{ borderRight: bRight }}
            date={education.date}
            iconStyle={{ background: education.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={education.icon}
                        alt="icon"
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h4 className="text-[1.25rem] font-bold">{education.name}</h4>
                <div style={{ display: "flex", marginTop: "1.5rem" }}>
                    <h5
                        className="text-secondary text-[16px] font-semibold"
                        style={{ margin: 0 }}
                    >
                        <span style={{ color: clr }}>Degree : </span>{education.degree} ({education.work})
                    </h5>
                </div>
            </div>

            <h5
                className="text-secondary text-[16px] font-semibold"
                style={{ marginTop: "1rem" }}
            >
                <span style={{ color: clr }}>Course : </span>{education.course}
            </h5>
            <h5
                className="text-secondary text-[16px] font-semibold"
                style={{ marginTop: "1rem" }}
            >
                <span style={{ color: clr }}>Percentage : </span>{education.percentage}
            </h5>
        </VerticalTimelineElement>
    );
};

const Education = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const bg = darkMode ? "#ffe0e5" : "#4a4632"
    const cl = darkMode ? "black" : "white"
    return (
        <>
            <div id="education" className="w-full sm:mx-0" style={{ margin: "-2.5rem 0rem -4rem 0rem", backgroundColor: bg, color: cl,}}>
                <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
                    <h2
                        className={
                            darkMode
                                ? "text-4xl sm:text-5xl font-bold px-4 md:px-0 text-center"
                                : "text-4xl sm:text-5xl font-bold px-4 md:px-0 text-center text-white"
                        }
                    >
                        Education
                    </h2>
                    <div className="mt-2 flex flex-col xl:mx-0 sm:mt-0 py-0 lg:mt-0 md:mt-0 pt-12 pb-12">
                        <VerticalTimeline>
                            {educations.map((education, index) => (
                                <EducationCard key={index} education={education} />
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;

// import React, { useContext } from "react";
// import {
//     VerticalTimeline,
//     VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { educations } from "../utils/constants";
// import SectionWrapper from "../components/SectionWrapper";
// import { ThemeContext } from "../themeProvider";


// const EducationCard = ({ education }) => {
//     const theme = useContext(ThemeContext);
//     const darkMode = theme.state.darkMode;
//     const bg = darkMode ? "#d7c69e52" : "rgb(29, 24, 54)"
//     const cl = darkMode ? "black" : "white"
//     return (
//         <VerticalTimelineElement
//             contentStyle={{
//                 background: bg,
//                 color: cl,
//                 borderRadius:"1rem",
//             }}
//             contentArrowStyle={{ borderRight: "7px solid red" }}
//             date={education.date}
//             iconStyle={{ background: education.iconBg }}
//             icon={
//                 <div className="flex justify-center items-center w-full h-full">
//                     <img
//                         src={education.icon}
//                         alt="icon"
//                         className="w-[60%] h-[60%] object-contain"
//                     />
//                 </div>
//             }
//         >
//             <div>
//                 <h4 className="text-[1.25rem] font-bold">{education.name}</h4>
//                 <div style={{ display: "flex", marginTop: "1rem" }}>
//                     <h5
//                         className="text-secondary text-[16px] font-semibold"
//                         style={{ margin: 0 }}
//                     >
//                         <span style={{ color: "grey" }}>Degree : </span>{education.degree}
//                     </h5>
//                     <h5
//                         className="text-secondary text-[16px] font-semibold"
//                         style={{ margin: "0rem 0.5rem" }}
//                     >
//                         ({education.work})
//                     </h5>
//                 </div>
//             </div>

//             <h5
//                 className="text-secondary text-[16px] font-semibold"
//                 style={{ marginTop: "1rem" }}
//             >
//                 <span style={{ color: "grey" }}>Course : </span>{education.course}
//             </h5>
//             <h5
//                 className="text-secondary text-[16px] font-semibold"
//                 style={{ marginTop: "1rem" }}
//             >
//                 <span style={{ color: "grey" }}>Percentage : </span>{education.percentage}
//             </h5>
//         </VerticalTimelineElement>
//     );
// };

// const Education = () => {
//     const theme = useContext(ThemeContext);
//     const darkMode = theme.state.darkMode;
//     const bg = darkMode ? "#fffcf0" : "black"
//     const cl = darkMode ? "black" : "white"
//     return (
//         <>
//             <div id="about" style={{ margin: "-5.5rem -12rem -4rem -12rem", backgroundColor: bg, color: cl ,}}>
//                 <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
//                     <h2
//                         className={
//                             darkMode
//                                 ? "text-5xl font-bold px-4 md:px-0 text-center"
//                                 : "text-5xl font-bold px-4 md:px-0 text-center text-white"
//                         }
//                     >
//                         Education
//                     </h2>
//                         <div className="mt-20 flex flex-col sm:mt-0 py-0 mx-28 lg:mt-0 px-12 mx-14 md:mt-0 pt-12 pb-12 px-12 mx-14">
//                             <VerticalTimeline>
//                                 {educations.map((education, index) => (
//                                     <EducationCard key={index} education={education} />
//                                 ))}
//                             </VerticalTimeline>
//                         </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SectionWrapper(Education, "education");