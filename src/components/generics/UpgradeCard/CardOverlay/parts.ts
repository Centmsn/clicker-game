import styled from "styled-components";

export const CardOverlay = styled.div`
  position: absolute;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(50, 50, 50, 0.85);
`;
