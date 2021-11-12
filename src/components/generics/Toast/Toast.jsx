import { useState } from "react";
import { createPortal } from "react-dom";
import * as P from "./parts";

const Toast = ({ variant }) => {
  const [isToastUp, setIsToastUp] = useState(true);

  return createPortal(
    isToastUp ? (
      <P.Wrapper variant={variant}>
        <P.Info>Zapisano zmiany</P.Info>
        <P.CloseButton onClick={() => setIsToastUp(false)}>X</P.CloseButton>
      </P.Wrapper>
    ) : null,
    document.getElementById("toast")
  );
};

export default Toast;
