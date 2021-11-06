import styled from "styled-components";
import { StyledButtonProps } from "./constants";

export const Button = styled.button<StyledButtonProps>`
  width: 200px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};

  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
