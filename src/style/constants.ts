import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      primaryDark: string;
      black: string;
      white: string;
      green: string;
      yellow: string;
      red: string;
      gray: string;
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
