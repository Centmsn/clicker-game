type variants = "white" | "red" | "green" | "yellow";

export interface ToastProps {
  isDisplay: boolean;
  children: any;
  variant: variants;
}

export interface StyledWrapperProps {
  variant: variants;
}
