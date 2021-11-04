import styled from "styled-components";
import { StyledLevelUpBtn } from "./constants";
import heroPortrait from "assets/Temporary_Assets/hero.png";

export const LevelUpButton = styled.button<StyledLevelUpBtn>`
  font-size: 40px;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};

  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  position: relative;
  width: 80%;
  height: 25%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: solid 4px ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const HeroInfo = styled.p`
  grid-area: 1/1/2/7;
  border-bottom: 1px solid black;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const HeroPortrait = styled.div`
  grid-area: 2/1/5/4;
  margin-top: 10px;
  background-image: url(${heroPortrait});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LevelUpSection = styled.div`
  grid-area: 2/4/5/7;
  font-size: 26px;
`;

export const UpgradesSkillsWrapper = styled.div`
  grid-area: 5/1/7/7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
