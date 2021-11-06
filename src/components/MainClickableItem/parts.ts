import styled from "styled-components";
import { StyledButtonProps } from "./constants";
import treasure from "assets/Backgrounds/treasureChest.png";

export const Button = styled.button<StyledButtonProps>`
  transform: scale(${({ isClicked }) => (isClicked ? 0.85 : 1)});

  height: 300px;
  width: 300px;

  background: url(${treasure}) no-repeat center / cover;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;
