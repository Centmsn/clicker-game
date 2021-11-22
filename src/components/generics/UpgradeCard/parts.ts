import styled from "styled-components";
import { StyledLevelUpBtn, StyledHeroPortraitProps, CardProps } from "./constants";

export const Card = styled.div<CardProps>`
  position: relative;

  display: ${({ isExpanded }) => (isExpanded ? "grid" : "block")};
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  width: 100%;
  height: ${({ isExpanded }) => (isExpanded ? "35%" : "5%")};
  padding: 10px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;

  transition: 0.2s;
`;

export const HeroInfo = styled.p`
  grid-area: 1/1/3/8;

  font-size: 1rem;
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

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => theme.styles.border_solid_tight};
  }
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
  filter: grayscale(${(isDisabled) => (isDisabled ? 1 : 0)});
  pointer-events: ${(isDisabled) => (isDisabled ? "none" : "auto")};
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

export const HideButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 40px;
  height: 20px;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  cursor: pointer;

  transition: 0.3s;
`;

export const SubTitle = styled.p`
  border-top: ${({ theme }) => theme.styles.border_solid_tight};
  padding-top: 3px;

  font-size: 0.4rem;
  font-style: italic;
`;

export const Sup = styled.sup`
  font-size: 0.4rem;
`;
