import styled from "styled-components";
import { StyledButtonProps } from "./constants";
import centaur from "assets/centaur.png";

export const Button = styled.button<StyledButtonProps>`
  transform: scale(${({ isClicked }) => (isClicked ? 0.85 : 1)});

  height: 40vh;
  width: 40vh;

  background: url(${centaur}) no-repeat center / cover;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;
