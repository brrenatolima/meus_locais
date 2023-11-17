import { createContext } from "react";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const lightTheme = {
    ...MD3LightTheme,
    colors : {
      ...MD3LightTheme.colors,
      color: '#000',
      primary : '#3E5641',
      secondary : '#A24936',
    },
    "name" : "light"
}

export const darkTheme = {
    ...MD3DarkTheme,
    colors : {
      ...MD3DarkTheme.colors,
      color: '#000',
      primary : '#3E5641',
      secondary : '#A24936', 
    },
    "name" : "dark"
  }

  export const ThemeContext = createContext(lightTheme);
