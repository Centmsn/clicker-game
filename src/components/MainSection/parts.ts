import styled from "styled-components";
import coinsBackground from "assets/Backgrounds/coinsBackground.jpg";

export const Wrapper = styled.div`
  grid-area: 1/3/11/9;

  border-left: solid 6px black;
  border-right: solid 6px black;
  border-bottom: solid 6px black;

  background: center / cover no-repeat url(${coinsBackground});
  background-position: bottom;
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
