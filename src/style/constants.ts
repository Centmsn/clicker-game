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
      paddings: {
        tiny: string;
        small: string;
        medium: string;
        large: string;
      };
      width: {
        wee: string;
        tiny: string;
        low: string;
        medium: string;
        high: string;
      };
      height: {
        wee: string;
        tiny: string;
        low: string;
        medium: string;
        high: string;
      };
      border: {
        solid_black_tight: string;
        solid_white_tight: string;
        solid_black_normal: string;
        solid_gray_normal: string;
      };
      font_sizes: {
        tiny: string;
        small: string;
        large: string;
      };
      transitions: {
        fast: string;
      };
      margins: {
        tiny: string;
        small: string;
        medium: string;
      };
      line_height: {
        tiny: string;
        great: string;
      };
    };
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
