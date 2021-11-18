import styled from "styled-components";

export const Stat = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 90%;
  margin: 10px 0;

  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;
