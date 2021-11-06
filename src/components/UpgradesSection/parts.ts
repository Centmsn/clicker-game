import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 1/11/13/13;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 20vw;

  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
