import { ThemeProvider as ThemeProviderComponent, DefaultTheme } from "styled-components";
import { ThemeProviderProps } from "./constants";

const theme: DefaultTheme = {
  colors: {
    primary: "rgb(247, 233, 208)",
    secondary: "rgb(245, 204, 132)",
    primaryDark: "rgb(117, 108, 91)",
    black: "rgb(26, 26, 26)",
    white: "rgb(255, 255, 255)",
    green: "rgb(75, 179, 87)",
    yellow: "rgb(245, 225, 49)",
    red: "rgb(255, 103, 79)",
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>;
};

export default ThemeProvider;
