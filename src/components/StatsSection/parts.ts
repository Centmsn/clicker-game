import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 1/1/13/3;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
