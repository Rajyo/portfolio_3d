import React, { createContext, useReducer } from "react";
export const ThemeContext = createContext();

const initialState = { darkMode: true };

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
  // const toggle1 = localStorage.getItem('toggle')
  // console.log(toggle1)

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
