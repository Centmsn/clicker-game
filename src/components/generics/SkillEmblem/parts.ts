import styled from "styled-components";
import { StyledLevelUpButtonProps } from "./constants";
import woodenSword from "assets/Temporary_Assets/woodenSword.png";

export const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  background-color: blue;
  color: white;
  width: 100%;
  height: 32%;
  font-size: 8px;
`;

export const SkillEmblem = styled.div`
  width: 25%;
  height: 90%;

  border: 1px black solid;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${woodenSword});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LevelUpButton = styled.button<StyledLevelUpButtonProps>`
  border: solid 2px white;
  border-radius: 10%;
  padding: 2px;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  font-size: 0.4rem;
  color: ${({ theme }) => theme.colors.primary};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  & img {
    height: 50%;
    width: 35%;
  }
`;
