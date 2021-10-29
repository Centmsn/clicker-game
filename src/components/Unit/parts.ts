import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  height: 40%;
  width: auto;
`;

export const Image = styled.img`
  height: 100%;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;
