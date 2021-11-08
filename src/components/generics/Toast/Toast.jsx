import * as P from "./parts";

const Toast = ({ isDisplay, onClose }) => {
  return isDisplay ? (
    <P.Wrapper>
      <p>Zapisano zmiany</p>
      <P.CloseButton onClick={() => onClose(false)}>X</P.CloseButton>
    </P.Wrapper>
  ) : null;
};

export default Toast;
