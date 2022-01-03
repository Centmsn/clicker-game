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
  height: ${({ theme }) => theme.styles.height.low};

  background-color: ${({ theme }) => theme.colors.secondary};

  font-size: ${({ theme }) => theme.styles.font_sizes.small};

  color: ${({ theme }) => theme.colors.black};
  ${({ variant }) => getBtnVariant(variant)}

  transition: ${({ theme }) => theme.styles.transitions.fast};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === ButtonVariants.PRIMARY ? theme.colors.secondary : theme.colors.primary};
  }
`;
