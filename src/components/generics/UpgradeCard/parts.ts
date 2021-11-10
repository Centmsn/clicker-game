import styled from "styled-components";
import { StyledLevelUpBtn, StyledHeroPortraitProps } from "./constants";

export const Card = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  width: 100%;
  height: 35%;
  padding: 10px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeroInfo = styled.p`
  grid-area: 1/1/3/8;
  font-size: 1rem;

  border-bottom: 1px solid black;
  margin-bottom: 5px;

  & em,
  sup {
    font-size: 0.4rem;
  }

  & img {
    width: 20px;
  }
`;

export const HeroPortrait = styled.div<StyledHeroPortraitProps>`
  grid-area: 3/1/9/4;

  background-image: url(${({ portrait }) => portrait});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const UpgradesSkillsWrapper = styled.div`
  grid-area: 3/4/13/13;
  overflow: auto;
`;

export const LevelUpButton = styled.button<StyledLevelUpBtn>`
  grid-area: 10/1/11/4;
  position: relative;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);

  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 10%;
  width: 80%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.5rem;

  transition: 0.3s;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;

  & img {
    width: 25%;
    height: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
