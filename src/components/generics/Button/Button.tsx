import * as P from "./parts";
import { ButtonProps } from "components/generics/Button/constants";
import React, { PropsWithChildren } from "react";

// TODO: variant should change button style - define button styles
const Button = ({ children, onClick, isDisabled = false, variant = "primary" }: PropsWithChildren<ButtonProps>) => {
  const handleOnClick = (event: React.MouseEvent) => {
    if (isDisabled) return;

    onClick(event);
  };

  return (
    <P.Button onClick={handleOnClick} variant={variant} isDisabled={isDisabled}>
      {children}
    </P.Button>
  );
};

export default Button;
