import styled from "styled-components";

export const CardOverlay = styled.div`
  position: absolute;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(100, 100, 100, 0.85);
`;
