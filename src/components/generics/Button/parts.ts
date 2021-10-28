import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.color};
  color: black;
  transition: 0.3s;
  &:hover {
    background-color: blanchedalmond;
    cursor: pointer;
  }
`;
