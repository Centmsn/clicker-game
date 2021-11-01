import { ModalProps } from "./constants";
import * as P from "./parts";

const Modal = ({ content, toggleModal }: ModalProps) => {
  return (
    <>
      <P.Overlay onClick={() => toggleModal(false)}></P.Overlay>
      <P.ModalWindow>
        {content}
        <P.CloseButton onClick={() => toggleModal(false)}>✖️</P.CloseButton>
      </P.ModalWindow>
    </>
  );
};

export default Modal;
