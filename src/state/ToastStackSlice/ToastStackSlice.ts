import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastVariants } from "components/generics/Toast";
import { toastStackInitialState, MAX_AMOUNT_OF_TOASTS, ToastStackItem } from "./constants";

const ToastStackSlice = createSlice({
  name: "ToastStackSlice",
  initialState: toastStackInitialState,
  reducers: {
    openNewToast(state, action: PayloadAction<{ msg: string; variant: ToastVariants }>) {
      const toastId = [0, 1, 2, 3, 4].filter((id) => state.stack.every((toast) => toast.id !== id))[0];
      const newToast: ToastStackItem = {
        msg: action.payload.msg,
        variant: action.payload.variant,
        id: toastId,
      };

      if (state.stack.length >= MAX_AMOUNT_OF_TOASTS) {
        const [, ...rest] = state.stack;
        const newStack = [...rest, newToast];
        state.stack = newStack;
      } else {
        state.stack = [...state.stack, newToast];
      }
    },
    closeSelectedToast(state, action: PayloadAction<number>) {
      state.stack = state.stack.filter((toast) => toast.id !== action.payload);
    },
    closeLastToast(state) {
      const [, ...rest] = state.stack;
      state.stack = rest;
    },
  },
});

export const { closeSelectedToast, openNewToast, closeLastToast } = ToastStackSlice.actions;

export default ToastStackSlice.reducer;
