import styled from "styled-components";
import { fadeOut } from "style/utils";

export const CardOverlay = styled.div`
  position: absolute;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => fadeOut(theme.colors.black, 0.75)};
`;
