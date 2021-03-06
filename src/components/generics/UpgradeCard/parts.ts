import styled from "styled-components";
import { StyledLevelUpBtn, StyledHeroPortraitProps, CardProps } from "./constants";

export const Card = styled.div<CardProps>`
  position: relative;

  display: ${({ isExpanded }) => (isExpanded ? "grid" : "block")};
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  width: 100%;
  height: ${({ isExpanded }) => (isExpanded ? "35%" : "5%")};
  padding: ${({ theme }) => theme.styles.paddings.medium};
  margin-bottom: ${({ theme }) => theme.styles.margins.medium};

  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;

  transition: ${({ theme }) => theme.styles.transitions.fast}; ;
`;

export const HeroInfo = styled.p`
  grid-area: 1/1/3/8;

  font-size: ${({ theme }) => theme.styles.font_sizes.small}; ;
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
    width: ${({ theme }) => theme.styles.width.wee};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => theme.styles.border.solid_black_tight};
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
  font-size: ${({ theme }) => theme.styles.font_sizes.tiny};

  transition: ${({ theme }) => theme.styles.transitions.fast};
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

  width: ${({ theme }) => theme.styles.width.low};
  height: ${({ theme }) => theme.styles.height.tiny};

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  cursor: pointer;

  transition: ${({ theme }) => theme.styles.transitions.fast}; ;
`;

export const SubTitle = styled.p`
  border-top: ${({ theme }) => theme.styles.border.solid_black_tight};
  padding-top: ${({ theme }) => theme.styles.paddings.tiny};

  font-size: ${({ theme }) => theme.styles.font_sizes.tiny};
  font-style: italic;
`;

export const Sup = styled.sup`
  font-size: ${({ theme }) => theme.styles.font_sizes.tiny};
`;
