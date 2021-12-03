import styled from "styled-components";
import { StyledTitleProps } from "./constants";

export const Title = styled.header<StyledTitleProps>`
  display: ${({ variant }) => (variant === "small" ? "inline-block" : "block")};

  margin-bottom: ${({ variant }) => (variant === "small" ? "5px" : "30px")};
  padding-top: ${({ variant }) => (variant === "small" ? "5px" : "30px")};

  font-size: ${({ variant }) => (variant === "small" ? "0.8rem" : "1.2rem")};
  color: ${({ variant }) =>
    variant === "small" ? ({ theme }) => theme.colors.black : ({ theme }) => theme.colors.primary};
  text-align: ${({ variant }) => (variant === "small" ? "left" : "center")};
`;
