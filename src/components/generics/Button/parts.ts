import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.variantOne.secondary};
  color: black;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.variantOne.primary};
    cursor: pointer;
  }
`;
