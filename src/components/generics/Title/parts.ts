import styled from "styled-components";
import { StyledTitleProps } from "./constants";

export const Title = styled.header<StyledTitleProps>`
  display: ${({ variant }) => (variant === "small" ? "inline-block" : "block")};

  margin-bottom: ${({ variant }) => (variant === "small" ? null : "30px")};
  padding-top: ${({ variant }) => (variant === "small" ? null : "30px")};

  font-size: ${({ variant }) => (variant === "small" ? null : "1.2rem")};
  color: ${({ variant }) => (variant === "small" ? null : ({ theme }) => theme.colors.black)};
  text-align: ${({ variant }) => (variant === "small" ? null : "center")};
`;
