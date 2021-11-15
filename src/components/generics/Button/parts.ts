import styled, { css } from "styled-components";
import { StyledButtonProps } from "./constants";

const jakisVariant = css`
  font-size: 12px;
  color: red;
`;

const getBtnVariant = (variant: string | undefined) => {
  switch (variant) {
    case "primary":
      return jakisVariant;
    default:
      return;
  }
};

const Variants = {
  primary: {
    backgroundColor: "red",
    fontSize: "12px",
  },
  secondary: {
    backgroundColor: "blue",
    fontSize: "22px",
  },
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
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
