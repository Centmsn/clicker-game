import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      primaryDark: string;
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
