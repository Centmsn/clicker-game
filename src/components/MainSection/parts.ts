import styled from "styled-components";
import islandBackground from "assets/Backgrounds/islandBackground.gif";

export const Wrapper = styled.div`
  grid-area: 1/3/11/11;
  background: center / cover no-repeat url(${islandBackground});
  background-position: 0 80%;
  border-left: solid 6px black;
  border-right: solid 6px black;
  border-bottom: solid 6px black;
`;

export const ButtonWrapper = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  height: 10%;
`;
