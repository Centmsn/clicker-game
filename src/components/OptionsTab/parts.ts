import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: ${({ theme }) => theme.styles.paddings.large} ${({ theme }) => theme.styles.paddings.medium};
`;
