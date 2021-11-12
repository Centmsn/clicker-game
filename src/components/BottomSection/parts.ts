import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 11/3/13/11;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
`;
