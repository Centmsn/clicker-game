import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 1/11/13/13;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  width: 20vw;
  height: 100vh;
`;
