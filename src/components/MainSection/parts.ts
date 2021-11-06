import styled from "styled-components";
import caveBackground from "assets/caveBackground.jpg";

export const Wrapper = styled.div`
  grid-area: 1/3/11/11;

  border-left: solid 6px black;
  border-right: solid 6px black;
  border-bottom: solid 6px black;

  background-image: url(${caveBackground});
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
