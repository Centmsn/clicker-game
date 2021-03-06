import styled from "styled-components";
import islandBackground from "assets/Backgrounds/islandBackground.gif";

export const Wrapper = styled.div`
  position: relative;
  grid-area: 1/3/11/9;

  background: center / cover no-repeat url(${islandBackground});
  background-position: bottom;

  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90%;
`;

export const TitleWrapper = styled.div`
  height: 10%;
`;
