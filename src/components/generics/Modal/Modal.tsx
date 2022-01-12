import { useState } from "react";
import { ModalProps } from "./constants";
import * as P from "./parts";

const Modal = ({ children, isVisible, setVisible, callback }: ModalProps) => {
  const [isClose, setIsClose] = useState(!isVisible);

  const onClose = () => {
    if (setVisible) setVisible(false);
    setIsClose(isVisible);
  };

  const onConfirmed = () => {
    if (callback) callback();
    if (setVisible) setVisible(false);
    setIsClose(isVisible);
  };

  return (
    <>
      <P.Overlay></P.Overlay>
      <P.ModalWindow>
        {children}
        <P.CloseButton onClick={onClose}>✖️</P.CloseButton>
        <P.Confirmation>
          <P.ConfirmBtn onClick={onConfirmed}>YES</P.ConfirmBtn>
          <P.ConfirmBtn onClick={onClose}>NO</P.ConfirmBtn>
        </P.Confirmation>
      </P.ModalWindow>
    </>
  );
};

export default Modal;
