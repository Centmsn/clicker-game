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
    paddings: {
      tiny: "2px",
      small: "5px",
      medium: "10px",
      large: "20px",
    },
    width: {
      wee: "10px",
      tiny: "30px",
      low: "50px",
      medium: "100px",
      high: "250px",
    },
    height: {
      wee: "10px",
      tiny: "30px",
      low: "50px",
      medium: "100px",
      high: "250px",
    },
    border: {
      solid_black_tight: "2px solid rgb(26, 26, 26)",
      solid_white_tight: "2px solid rgb(255, 255, 255)",
      solid_black_normal: "8px solid rgb(26,26,26)",
      solid_gray_normal: "8px solid rgb(95,95,95)",
    },
    font_sizes: {
      tiny: "0.4rem",
      small: "0.7rem",
      large: "2rem",
    } as const,
    transitions: {
      fast: "0.3s",
    },
    margins: {
      tiny: "5px",
      small: "10px",
      medium: "20px",
    },
    line_height: {
      tiny: "35px",
      great: "75px",
    } as const,
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>;
};

export default ThemeProvider;
