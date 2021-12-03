import { AnimatePresence } from "framer-motion";
import { ExtendedToastProps } from "./constants";
import * as P from "./parts";

const Toast = ({ children, variant, isVisible, onClose }: ExtendedToastProps) => {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <P.Wrapper variant={variant} animate="visible" exit="exit">
        <P.ButtonWrapper>
          <P.CloseButton onClick={onClose}>X</P.CloseButton>
        </P.ButtonWrapper>
        <P.ContentWrapper>{children}</P.ContentWrapper>
      </P.Wrapper>
    </AnimatePresence>
  );
};

export default Toast;
