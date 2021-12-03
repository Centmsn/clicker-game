import { RootState } from "state";

export const toastStackSelector = (state: RootState) => state.toastStack;
export const toastStackStackSelector = (state: RootState) => state.toastStack.stack;
export const toastStackCountSelector = (state: RootState) => state.toastStack.stack.length;
