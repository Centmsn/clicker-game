import styled from "styled-components";
import coinsBackground from "assets/Backgrounds/coinsBackground.jpg";

export const Wrapper = styled.div`
  grid-area: 1/3/11/11;
  background: center / cover no-repeat url(${coinsBackground});
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
