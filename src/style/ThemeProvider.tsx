import { ThemeProvider as ThemeProviderComponent, DefaultTheme } from "styled-components";
import { ThemeProviderProps } from "./constants";

const theme: DefaultTheme = {
  colors: {
<<<<<<< Updated upstream
    primary: "rgb(200, 200, 200)",
    secondary: "rgb(100, 100, 100",
    primaryDark: "#349394",
    variantOne: {
      basic: "#F5F5FA",
      primary: "#F7E9D0",
      primaryDark: "#F5CC84",
      secondary: "#C2A169",
      secondaryDark: "#756C5B",
    },
    variantTwo: {
      basic: "#F5F5FA",
      primary: "#9091AD",
      primaryDark: "#596869",
      secondary: "#FAFAE8",
    },
=======
    primary: "#F7E9D0",
    secondary: "#F5CC84",
    primaryDark: "#756C5B",
>>>>>>> Stashed changes
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>;
};

export default ThemeProvider;
