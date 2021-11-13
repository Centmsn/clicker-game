import { useState } from "react";
import { ModalProps } from "./constants";
import * as P from "./parts";

const Modal = ({ children, isVisible }: ModalProps) => {
  const [isClose, setIsClose] = useState(isVisible);

  const onClose = () => {
    setIsClose(false);
  };

  return (
    <>
      {isClose ? (
        <>
          <P.Overlay></P.Overlay>
          <P.ModalWindow>
            {children}
            <P.CloseButton onClick={onClose}>✖️</P.CloseButton>
          </P.ModalWindow>
        </>
      ) : null}
    </>
  );
};

export default Modal;
