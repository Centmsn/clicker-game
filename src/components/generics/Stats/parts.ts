import styled from "styled-components";

export const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 10%;
  margin: 10px 0;
  border: black solid 2px;

  background-color: #fff;

  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;
