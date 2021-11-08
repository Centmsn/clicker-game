export type ButtonVariant = "primary" | "secondary";
export interface ButtonProps {
  variant?: ButtonVariant;
  onClick: () => void;
}

export interface StyledButtonProps {
  variant: ButtonVariant;
}
