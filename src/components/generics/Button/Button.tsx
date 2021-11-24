import React from "react";
import { ExtendedButtonProps } from "components/generics/Button/constants";
import * as P from "./parts";

// TODO: variant should change button style - define button styles
const Button = ({ children, onClick, isDisabled = false, variant = "primary", ...restProps }: ExtendedButtonProps) => {
  const handleOnClick = (event: React.MouseEvent) => {
    if (isDisabled) return;

    onClick(event);
  };

  return (
    <P.Button onClick={handleOnClick} variant={variant} isDisabled={isDisabled} {...restProps}>
      {children}
    </P.Button>
  );
};

export default Button;
