import React from "react";

export type ButtonVariant = "primary" | "secondary";
export interface ButtonProps {
  variant?: ButtonVariant;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export type StyledButtonProps = Pick<ButtonProps, "variant" | "isDisabled">;
