import React from "react";
import loading from "../assets/loading-7528.gif"

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[7rem] h-[7rem] sm:w-[10rem] sm:h-[10rem]">
        <img
          src={loading}
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
