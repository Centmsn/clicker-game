import {
  ThemeProvider as ThemeProviderComponent,
  DefaultTheme,
} from "styled-components";
import { ThemeProviderProps } from "./constants";

const theme: DefaultTheme = {
  colors: {
    primary: "rgb(200, 200, 200)",
    secondary: "rgb(100, 100, 100",
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>
  );
};

export default ThemeProvider;
