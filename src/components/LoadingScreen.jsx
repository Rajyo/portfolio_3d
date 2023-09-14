import { useContext, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import { ThemeContext } from "../themeProvider";


function LoadingScreen() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#efb53c" : "black"

  return (
     <div className="flex justify-center items-center h-screen">
       <div className="w-[7rem] h-[7rem] sm:w-[10rem] sm:h-[10rem]">      
       <GridLoader
        color={bg}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  );
}

export default LoadingScreen;

// import React from "react";
// import loading from "../assets/loading-7528.gif"

// const LoadingScreen = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-[7rem] h-[7rem] sm:w-[10rem] sm:h-[10rem]">
//         <img
//           src={loading}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
