import styled from "styled-components";
import { StyledCheckboxIconProps, StyledCheckboxProps } from "./constants";
import { shouldDisablePointerEvents } from "style/utils";
import { getBackgroundColor } from "./utils";

export const Label = styled.span`
  margin-right: 10px;
`;

export const Checkbox = styled.div<StyledCheckboxProps>`
  position: relative;
  width: 30px;
  height: 30px;
  padding: 2px;
  border: 2px solid ${({ theme }) => theme.colors.black};

  background: ${({ theme, isDisabled }) => getBackgroundColor(isDisabled, theme.colors.black)};
  pointer-events: ${({ isDisabled }) => shouldDisablePointerEvents(isDisabled)};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;

    background-color: red;
  }
`;

export const CheckboxIcon = styled.div<StyledCheckboxIconProps>`
  width: 100%;
  height: 100%;
  transform: scale(${({ isChecked }) => (isChecked ? 1 : 0)});

  background-color: ${({ theme }) => theme.colors.black};

  transition: 300ms;
`;
