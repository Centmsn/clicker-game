import { PropsWithChildren } from "react";

export enum ToastVariants {
  WHITE = "white",
  RED = "red",
  GREEN = "green",
  YELLOW = "yellow",
}

export type ToastProps = PropsWithChildren<{
  isVisible: boolean;
  variant: ToastVariants;
  onClose: () => void;
}>;

export type StyledWrapperProps = Required<Pick<ToastProps, "variant">>;
