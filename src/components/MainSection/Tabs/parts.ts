import styled from "styled-components";
import { fadeOut } from "style/utils";
import { calcTranslateX } from "./utils";
import { StyledTabProps, StyledTabHeaderProps } from "./constants";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;

  transform: translateY(100%);
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.red};
`;

export const Tab = styled.div<StyledTabProps>`
  z-index: ${({ isVisible }) => (isVisible ? 99 : 0)};
  position: absolute;

  transform: translateY(${({ isVisible }) => (isVisible ? "-90%" : 0)});
  height: 100%;
  width: 100%;

  transition: ${({ theme }) => theme.styles.transitions.fast};
`;

export const TabHeader = styled.div<StyledTabHeaderProps>`
  position: absolute;
  top: -10%;
  display: flex;
  justify-content: ${({ isVisible }) => (isVisible ? "space-between" : "center")};
  align-items: center;

  transform: translateX(${({ index, isVisible }) => calcTranslateX(isVisible, index)});
  width: ${({ width, isVisible }) => (isVisible ? 100 : width)}%;
  height: 10%;
  padding: 0 ${({ theme }) => theme.styles.paddings.large};

  background-color: ${({ theme }) => theme.colors.secondary};
  border-top: ${({ theme }) => theme.styles.border.solid_gray_normal};
  border-right: ${({ theme }) => theme.styles.border.solid_black_normal};
  border-bottom: ${({ theme }) => theme.styles.border.solid_gray_normal};
  border-left: ${({ theme }) => theme.styles.border.solid_black_normal};

  cursor: pointer;
  pointer-events: ${({ isVisible }) => (isVisible ? "none" : "auto")};
`;

export const TabBody = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => fadeOut(theme.colors.primaryDark, 0.95)};

  overflow: auto;
`;
