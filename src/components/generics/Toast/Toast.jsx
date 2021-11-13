import { useState } from "react";
import { createPortal } from "react-dom";
import * as P from "./parts";

const Toast = ({ children, variant, isDisplay }) => {
  const [isToastVisible, setIsToastVisible] = useState(isDisplay);

  return createPortal(
    isDisplay ? (
      <P.Wrapper variant={variant}>
        <P.Info>Zapisano zmiany</P.Info>
        {children}
        <P.CloseButton onClick={() => setIsToastVisible(false)}>X</P.CloseButton>
      </P.Wrapper>
    ) : null,
    document.getElementById("modals")
  );
};

export default Toast;
