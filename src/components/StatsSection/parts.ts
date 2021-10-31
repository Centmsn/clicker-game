import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: 1/1/13/3;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
