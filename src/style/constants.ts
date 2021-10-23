import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
