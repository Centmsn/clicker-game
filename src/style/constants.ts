import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
