import { ToastVariants } from "components/generics/Toast";

export const MAX_AMOUNT_OF_TOASTS = 5;

export interface ToastStackItem {
  id: number;
  msg: string;
  variant: ToastVariants;
}

export interface ToastStackState {
  stack: Array<ToastStackItem>;
}

export const toastStackInitialState: ToastStackState = {
  stack: [],
};
