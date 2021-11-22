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
    gray: "rgb(95, 95, 95)",
    dim: "rgba(0, 0, 0, 0.5)",
  },
  styles: {
    pad_tiny: "2px",
    pad_small: "10px",
    width_tiny: "30px",
    width_low: "50px",
    width_medium: "100px",
    width_high: "250px",
    height_tiny: "30px",
    height_low: "50px",
    height_medium: "100px",
    height_high: "250px",
    border_solid_tight: "2px solid rgb(26, 26, 26)",
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>;
};

export default ThemeProvider;
