import styled from "styled-components";
import { StyledButtonProps, Variants } from "./constants";

const getBtnVariant = (variant: string | undefined) => {
  switch (variant) {
    case "primary":
      return Variants.primary;
    case "secondary":
      return Variants.secondary;
    default:
      return;
  }
};

export const Button = styled.button<StyledButtonProps>`
  width: 200px;
  height: 50px;

  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ variant }) => getBtnVariant(variant)}

  transition: 0.3s;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.secondary : theme.colors.primary};
  }
`;
