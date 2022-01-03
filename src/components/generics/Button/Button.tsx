import React, { PropsWithChildren } from "react";
import { ButtonProps, ButtonVariants } from "components/generics/Button/constants";
import * as P from "./parts";

const Button = ({
  children,
  onClick,
  isDisabled = false,
  variant = ButtonVariants.PRIMARY,
  size,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  const handleOnClick = (event: React.MouseEvent) => {
    if (isDisabled) return;

    onClick(event);
  };

  return (
    <P.Button size={size} onClick={handleOnClick} variant={variant} isDisabled={isDisabled} {...restProps}>
      {children}
    </P.Button>
  );
};

export default Button;
