import styled from "styled-components";
import { StyledLevelUpBtn, StyledHeroPortraitProps } from "./constants";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);

  width: 80%;
  height: 25%;
  border: solid 4px ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeroInfo = styled.p`
  grid-area: 1/1/2/7;
  font-size: 24px;

  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

export const HeroPortrait = styled.div<StyledHeroPortraitProps>`
  grid-area: 2/1/5/4;

  margin-top: 10px;

  background-image: url(${({ portrait }) => portrait});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LevelUpSection = styled.div`
  grid-area: 2/4/5/7;

  font-size: 26px;
`;

export const UpgradesSkillsWrapper = styled.div`
  grid-area: 2/3/7/7;
  display: flex;
  flex-direction: column;
`;

export const LevelUpButton = styled.button<StyledLevelUpBtn>`
  grid-area: 1/6/2/7;

  margin: 5px;
  padding: 0 15px;
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 10%;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  color: ${({ theme }) => theme.colors.primary};

  transition: 0.3s;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
