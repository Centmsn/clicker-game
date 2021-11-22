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
      dim: string;
    };
    styles: {
      pad_tiny: string;
      pad_small: string;
      width_tiny: string;
      width_low: string;
      width_medium: string;
      width_high: string;
      height_tiny: string;
      height_low: string;
      height_medium: string;
      height_high: string;
      border_solid_tight: string;
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
