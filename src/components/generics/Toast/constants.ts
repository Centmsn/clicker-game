import React from "react";

type ToastVariants = "white" | "red" | "green" | "yellow";

export interface ToastProps {
  isVisible: boolean;
  variant: ToastVariants;
  onClose: (e?: React.MouseEvent) => void;
}

export interface StyledWrapperProps {
  variant: ToastVariants;
}
