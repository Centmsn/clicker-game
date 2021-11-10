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

  background: red;
`;

export const Tab = styled.div<StyledTabProps>`
  z-index: ${({ isVisible }) => (isVisible ? 99 : 0)};
  position: absolute;

  transform: translateY(${({ isVisible }) => (isVisible ? "-90%" : 0)});
  height: 100%;
  width: 100%;

  transition: 300ms;
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
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-left: 8px solid ${({ theme }) => theme.colors.black};
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray};
  border-top: 8px solid ${({ theme }) => theme.colors.gray};
  border-right: 8px solid ${({ theme }) => theme.colors.black};

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
