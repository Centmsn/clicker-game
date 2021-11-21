import styled from "styled-components";
import { ButtonVariants, Sizes, StyledButtonProps, Variants } from "./constants";

const getBtnVariant = (variant: string | undefined) => {
  switch (variant) {
    case "PRIMARY":
      return Variants.primary;
    case "SECONDARY":
      return Variants.secondary;
    default:
      return;
  }
};

const getBtnSize = (size: string | undefined) => {
  switch (size) {
    case "SMALL":
      return Sizes.small;
    case "LARGE":
      return Sizes.large;
    default:
      return;
  }
};

export const Button = styled.button<StyledButtonProps>`
  width: ${({ size }) => getBtnSize(size)};
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
      variant === ButtonVariants.PRIMARY ? theme.colors.secondary : theme.colors.primary};
  }
`;
