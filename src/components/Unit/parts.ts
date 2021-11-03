import styled from "styled-components";
import { StyledButtonProps } from "./constants";
import centaur from "assets/centaur.png";

export const Button = styled.button<StyledButtonProps>`
  height: 300px;
  width: 300px;
  background: url(${centaur}) no-repeat center / cover;
  transition: 0.3s;
  transform: scale(${({ isClicked }) => (isClicked ? 0.85 : 1)});

  &:hover {
    cursor: pointer;
  }
`;
