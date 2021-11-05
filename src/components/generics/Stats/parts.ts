import styled from "styled-components";

export const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.1rem;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 80%;
  height: 10%;
  border: black solid 2px;
`;
