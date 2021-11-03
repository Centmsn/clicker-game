import * as P from "./parts";
import { ButtonProps } from "components/generics/Button/constants";
import { PropsWithChildren } from "react";

// TODO: variant should change button style - define button styles
const Button = ({ children, variant = "primary" }: PropsWithChildren<ButtonProps>) => {
  return <P.Button variant={variant}>{children}</P.Button>;
};

export default Button;
