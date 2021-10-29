import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      primaryDark: string;
      variantOne: any;
      variantTwo: any;
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
