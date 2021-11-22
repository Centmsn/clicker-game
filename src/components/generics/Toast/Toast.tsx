import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { ToastProps } from "./constants";
import * as P from "./parts";

const Toast = ({ children, variant, isVisible, onClose }: PropsWithChildren<ToastProps>) => {
  if (!isVisible) return null;

  return createPortal(
    <P.Wrapper variant={variant}>
      <P.Info>Zapisano zmiany</P.Info>
      {children}
      <P.CloseButton onClick={onClose}>X</P.CloseButton>
    </P.Wrapper>,
    document.getElementById("modals")!
  );
};

export default Toast;
