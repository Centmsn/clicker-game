import { PropsWithChildren, useState } from "react";
import Button from "../Button";
import { ModalProps } from "./constants";
import { ButtonSizes } from "../Button";
import { ButtonVariants } from "../Button";
import * as P from "./parts";

const Modal = ({ children, isVisible, setVisible, onConfirm }: PropsWithChildren<ModalProps>) => {
  const onClose = () => {
    if (setVisible) setVisible(!isVisible);
  };

  const onConfirmed = () => {
    if (onConfirm) onConfirm();
    if (setVisible) setVisible(!isVisible);
  };

  return (
    <>
      <P.Overlay />
      <P.ModalWindow>
        {children}
        <Button onClick={onClose} size={ButtonSizes.SMALL} variant={ButtonVariants.CLOSE} />
        <P.ButtonsContainer>
          <Button onClick={onConfirmed} size={ButtonSizes.SMALL} variant={ButtonVariants.CONFIRM}>
            yes
          </Button>
          <Button onClick={onClose} size={ButtonSizes.SMALL} variant={ButtonVariants.CONFIRM}>
            no
          </Button>
        </P.ButtonsContainer>
      </P.ModalWindow>
    </>
  );
};

export default Modal;
