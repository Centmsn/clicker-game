import styled from "styled-components";
import { StyledLevelUpBtn, StyledHeroPortraitProps, CardProps, DissapearingWrapperProps } from "./constants";

export const Card = styled.div<CardProps>`
  position: relative;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  overflow: hidden;

  width: 100%;
  height: ${({ isExpanded }) => (isExpanded ? "35%" : "5%")};
  padding: 10px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};

  transition: 0.5s;
`;

export const HeroInfo = styled.p`
  grid-area: 1/1/3/8;

  font-size: 1rem;
`;

export const HeroPortrait = styled.div<StyledHeroPortraitProps>`
  height: 50%;

  background-image: url(${({ portrait }) => portrait});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const UpgradesSkillsWrapper = styled.div`
  overflow: auto;

  width: 70%;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border: solid 2px ${({ theme }) => theme.colors.black};
  }
`;

export const LevelUpButton = styled.button<StyledLevelUpBtn>`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 10%;
  width: 120px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.5rem;

  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none " : "auto")};
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
  border-top: 1px solid black;
  padding-top: 3px;

  font-size: 0.4rem;
  font-style: italic;
`;

export const Sup = styled.sup`
  font-size: 0.4rem;
`;

export const DissapearingWrapper = styled.div<DissapearingWrapperProps>`
  grid-area: 3/1/13/13;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  transform: translateY(${({ isExpanded }) => (isExpanded ? "0" : "500%")});

  transition: 0.5s;
`;
