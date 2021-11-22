import styled from "styled-components";
import { StyledButtonProps } from "./constants";

export const Button = styled.button<StyledButtonProps>`
  width: ${({ theme }) => theme.styles.width_medium};
  height: ${({ theme }) => theme.styles.height_low};

  background-color: ${({ theme }) => theme.colors.secondary};

  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.black};

  transition: 0.3s;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
