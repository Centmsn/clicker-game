import { createContext, useState } from "react";
import { ToastVariants } from "components/generics/Toast";
import {
  ToastStackContextProviderProps,
  ToastStackItem,
  MAX_AMOUNT_OF_TOASTS,
  TOAST_CLOSE_DELAY,
  ToastStackContextValue,
} from "./constants";

const ToastStackContext = createContext({} as ToastStackContextValue);

export const ToastStackContextProvider = ({ children }: ToastStackContextProviderProps) => {
  const [toastStack, setToastStack] = useState<ToastStackItem[]>([]);

  function openNewToast(msg: string, variant: ToastVariants) {
    const newToast: ToastStackItem = {
      msg,
      variant,
      id: Date.now(),
    };

    if (toastStack.length < MAX_AMOUNT_OF_TOASTS) {
      setToastStack((prev) => [newToast, ...prev]);
    } else {
      setToastStack((prev) => [newToast, ...prev.slice(0, MAX_AMOUNT_OF_TOASTS - 1)]);
    }

    setTimeout(() => {
      closeToastById(newToast.id);
    }, TOAST_CLOSE_DELAY);

    return newToast;
  }

  function closeToastById(id: number) {
    setToastStack((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <ToastStackContext.Provider
      value={{
        openNewToast,
        closeToastById,
        toastStack,
      }}
    >
      {children}
    </ToastStackContext.Provider>
  );
};

export default ToastStackContext;
