import { ThemeProvider as ThemeProviderComponent, DefaultTheme } from "styled-components";
import { ThemeProviderProps } from "./constants";

const theme: DefaultTheme = {
  colors: {
    white: "#F5F5FA",
    primary: "#F7E9D0",
    primaryDark: "#F5CC84",
    secondary: "#C2A169",
    secondaryDark: "#756C5B",
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>;
};

export default ThemeProvider;
