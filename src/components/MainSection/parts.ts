import styled from "styled-components";
import caveBackground from "assets/caveBackground.jpg";

export const Wrapper = styled.div`
  width: 60vw;
  height: 100vh;
  background-image: url(${caveBackground});
  background-position: bottom;
  border-left: solid 6px black;
  border-right: solid 6px black;
`;
