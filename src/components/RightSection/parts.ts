import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 1/9/13/13;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  overflow: auto;
`;
