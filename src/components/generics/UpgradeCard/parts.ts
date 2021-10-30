import styled from "styled-components";
import heroPortrait from "assets/Temporary_Assets/hero.png";

export const Card = styled.div`
  position: relative;
  width: 80%;
  height: 25%;
  background-color: orange;
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
