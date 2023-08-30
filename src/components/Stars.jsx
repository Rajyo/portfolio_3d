import { useContext } from "react";
import StarfieldAnimation from "react-starfield-animation";
import { ThemeContext } from "../themeProvider";

const Stars = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#efb53c" : "black"
  return (
    <StarfieldAnimation
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor:bg
      }}
      numParticles={2000}
      particleSpeed={0}
      dx={0.000000001} // x speed of stars in px/frame, default 0.05
      dy={0.000000001}
    />
  );
}

export default Stars;