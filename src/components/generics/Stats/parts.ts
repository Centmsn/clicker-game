import styled from "styled-components";

export const Stat = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 90%;
  /* height: 5%; */
  margin: 10px 0;
  /* padding: 0 10px; */
  /* border: solid 2px ${({ theme }) => theme.colors.black}; */

  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};

  /* background-color: ${({ theme }) => theme.colors.primary}; */
`;
