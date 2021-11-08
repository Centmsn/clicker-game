import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgb(255, 90, 80);
  border: solid black 2px;
  text-align: center;
  line-height: 75px;
  color: white;
  width: 300px;
  height: 75px;
`;

export const CloseButton = styled.button`
  margin-top: 5px;
  color: white;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
