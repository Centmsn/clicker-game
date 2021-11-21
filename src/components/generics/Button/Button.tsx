import React, { PropsWithChildren } from "react";
import { ButtonProps } from "components/generics/Button/constants";
import * as P from "./parts";

// TODO: variant should change button style - define button styles
const Button = ({ children, onClick, isDisabled = false, variant, size }: PropsWithChildren<ButtonProps>) => {
  const handleOnClick = (event: React.MouseEvent) => {
    if (isDisabled) return;

    onClick(event);
  };

  return (
    <P.Button size={size} onClick={handleOnClick} variant={variant} isDisabled={isDisabled}>
      {children}
    </P.Button>
  );
};

export default Button;
