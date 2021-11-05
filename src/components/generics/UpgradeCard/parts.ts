import styled from "styled-components";
import heroPortrait from "assets/Temporary_Assets/hero.png";

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
  font-size: 24px;
`;

export const HorizontalLine = styled.div`
  grid-area: 2/1/3/7;
  border-top: solid 1px black;
`;

export const HeroPortrait = styled.div`
  grid-area: 3/1/6/3;
  background-image: url(${heroPortrait});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const UpgradesSkillsWrapper = styled.div`
  grid-area: 2/3/7/7;
  display: flex;
  flex-direction: column;
`;
