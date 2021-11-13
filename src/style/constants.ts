import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      primaryDark: string;
      black: string;
      gray: string;
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
