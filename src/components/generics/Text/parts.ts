import styled, { DefaultTheme } from "styled-components";
import { StyledTextProps, TextVariant, TextColor } from "./constants";

const getTextSize = (variant: TextVariant) => {
  switch (variant) {
    case TextVariant.SMALL:
      return "8px";
    case TextVariant.LARGE:
      return "16px";
    default:
      return "12px";
  }
};

const getTextColor = (color: TextColor, theme: DefaultTheme) => {
  switch (color) {
    case TextColor.LIGHT:
      return theme.colors.primary;
    default:
      return theme.colors.black;
  }
};

export const TextWrapper = styled.p<StyledTextProps>`
  color: ${({ theme, color }) => getTextColor(color, theme)};
  font-size: ${({ variant }) => getTextSize(variant)};
`;
