import React from "react";

export interface CheckboxProps {
  onClick: (event?: React.MouseEvent) => void;
  isChecked: boolean;
  label?: string;
  isDisabled?: boolean;
}

export interface StyledCheckboxIconProps {
  isChecked: boolean;
}

export interface StyledCheckboxProps {
  isDisabled: boolean;
  isChecked: boolean;
}
