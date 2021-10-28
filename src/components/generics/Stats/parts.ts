import styled from "styled-components";

export const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 24px;
  margin: 10px 0;
  background-color: #fff;
  width: 80%;
  height: 10%;
  border: black solid 2px;
`;
