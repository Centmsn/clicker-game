import styled from "styled-components";

export const Wrapper = styled.div`
  width: 60vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.variantOne.secondary};
  border-left: solid 6px black;
  border-right: solid 6px black;
`;
