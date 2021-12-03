import { ToastVariants } from "components/generics/Toast";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { toastStackCountSelector, closeLastToast, closeSelectedToast, openNewToast, MAX_AMOUNT_OF_TOASTS } from "state";

export const useToastStack = (closeDelay: number = 5000) => {
  const toastsCount = useAppSelector(toastStackCountSelector);
  const dispatch = useAppDispatch();

  function handleOpenNewToast(msg: string, variant: ToastVariants = ToastVariants.GREEN): void {
    dispatch(openNewToast({ msg, variant }));

    if (toastsCount < MAX_AMOUNT_OF_TOASTS) {
      setTimeout(() => {
        handleCloseLastToast();
      }, closeDelay);
    }
  }

  function handleCloseLastToast(): void {
    dispatch(closeLastToast());
  }

  function handleCloseSelectedToast(id: number): void {
    dispatch(closeSelectedToast(id));
  }

  return {
    openNewToast: handleOpenNewToast,
    closeLastToast: handleCloseLastToast,
    closeSelectedToast: handleCloseSelectedToast,
  };
};
