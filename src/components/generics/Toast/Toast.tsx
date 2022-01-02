import { ToastProps } from "./constants";
import * as P from "./parts";

const Toast = ({ children, variant, isVisible, onClose }: ToastProps) => {
  if (!isVisible) return null;

  return (
    <P.Wrapper variant={variant} exit="exit">
      <P.ButtonWrapper>
        <P.CloseButton onClick={onClose}>X</P.CloseButton>
      </P.ButtonWrapper>
      <P.ContentWrapper>{children}</P.ContentWrapper>
    </P.Wrapper>
  );
};

export default Toast;
