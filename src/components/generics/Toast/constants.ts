import React from "react";

export enum ToastVariants {
  WHITE = "white",
  RED = "red",
  GREEN = "green",
  YELLOW = "yellow",
}

export interface ToastProps {
  isVisible: boolean;
  variant: ToastVariants;
  onClose: (e?: React.MouseEvent) => void;
}

export type ExtendedToastProps = React.PropsWithChildren<ToastProps>;

export type StyledWrapperProps = Required<Pick<ToastProps, "variant">>;
