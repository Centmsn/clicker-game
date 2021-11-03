import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: black;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
