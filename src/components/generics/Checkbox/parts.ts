import styled from "styled-components";
import { StyledCheckboxIconProps, StyledCheckboxProps } from "./constants";
import { shouldDisablePointerEvents } from "style/utils";
import { getBackgroundColor } from "./utils";

export const Label = styled.span`
  margin-right: ${({ theme }) => theme.styles.margins.small};
`;

export const Checkbox = styled.div<StyledCheckboxProps>`
  position: relative;
  width: ${({ theme }) => theme.styles.width.tiny};
  height: ${({ theme }) => theme.styles.height.tiny};
  padding: ${({ theme }) => theme.styles.paddings.tiny};
  border: ${({ theme }) => theme.styles.border.solid_black_tight};

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

  transition: ${({ theme }) => theme.styles.transitions.fast}; ;
`;
