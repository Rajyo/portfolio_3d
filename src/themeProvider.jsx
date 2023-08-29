import React, { createContext, useReducer } from "react";
export const ThemeContext = createContext();

const toggle1 = localStorage.getItem('toggle')
if(toggle1 === null){
  localStorage.setItem('toggle', JSON.stringify(true))
}
const toggle2 = JSON.parse(localStorage.getItem('toggle'))


const initialState = { darkMode: toggle2 };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      localStorage.setItem('toggle', JSON.stringify(false))
      return { darkMode: false };
    case "DARKMODE":
      localStorage.setItem('toggle', JSON.stringify(true))
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
