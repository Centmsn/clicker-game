import React from "react";

export type ButtonVariant = "primary" | "secondary";
interface ButtonProps {
  variant?: ButtonVariant;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export type ExtendedButtonProps = React.PropsWithChildren<ButtonProps & React.HTMLAttributes<HTMLButtonElement>>;

export type StyledButtonProps = Pick<ButtonProps, "variant" | "isDisabled">;
