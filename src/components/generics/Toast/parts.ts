import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  border: solid black 2px;
  width: 300px;
  height: 75px;

  background-color: rgb(255, 90, 80);

  text-align: center;
  line-height: 75px;
  color: white;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;

  margin-top: 5px;

  cursor: pointer;

  color: white;
`;
