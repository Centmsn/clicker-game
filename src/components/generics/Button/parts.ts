import styled from "styled-components";
import { StyledButtonProps } from "./constants";

export const Button = styled.button<StyledButtonProps>`
  width: ${({ theme }) => theme.styles.width.medium};
  height: ${({ theme }) => theme.styles.height.low};

  background-color: ${({ theme }) => theme.colors.secondary};

  font-size: ${({ theme }) => theme.styles.font_sizes.small};
  color: ${({ theme }) => theme.colors.black};

  transition: ${({ theme }) => theme.styles.transitions.fast};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
