import styled from "styled-components";
import heroPortrait from "assets/Temporary_Assets/hero.png";

export const LevelUpButton = styled.button`
  font-size: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 80%;
  height: 25%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: solid 4px ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const HeroName = styled.p`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 32px;
`;

export const HeroLevel = styled(HeroName)`
  left: 50%;
`;

export const HorizontalLine = styled.div`
  position: absolute;
  width: 90%;
  border-top: solid 1px black;
  top: 30%;
  left: 5%;
`;

export const HeroPortrait = styled.div`
  position: absolute;
  top: 30%;
  width: 40%;
  height: 50%;
  margin-top: 10px;
  background-image: url(${heroPortrait});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LevelUpSection = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  margin-top: 10px;
  font-size: 26px;
  width: 60%;
  height: 45%;
`;

export const UpgradesSkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 80%;
  left: 5%;
  width: 90%;
  height: 15%;
  margin-top: 5px;
`;
