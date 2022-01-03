import React from "react";
import { ToastVariants } from "components/generics/Toast";

export const MAX_AMOUNT_OF_TOASTS = 5;

export const TOAST_CLOSE_DELAY = 5000;

export interface ToastStackContextProviderProps {
  children: React.ReactNode;
}

export interface ToastStackItem {
  id: number;
  msg: string;
  variant: ToastVariants;
}

export interface ToastStackState {
  stack: Array<ToastStackItem>;
}

export interface ToastStackContextValue {
  openNewToast: (msg: string, variant: ToastVariants) => ToastStackItem;
  closeToastById: (id: number) => void;
  toastStack: Array<ToastStackItem>;
}
