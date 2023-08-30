import React, { useContext } from 'react'
import Banner from "../components/Banner"
import { ThemeContext } from '../themeProvider';
import Light from "../utils/ThreeCube1";
import Dark from "../utils/ThreeCube";
import Stars from "../components/Stars"

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="home" >
      <Stars />
      {darkMode ? <Light /> : <Dark />}
      <Banner />
    </div>
  )
}

export default Home;