import styled from "styled-components";

export const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 10%;
  margin: 10px 0;
  border: black solid 2px;

  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.primary};
`;
