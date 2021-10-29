import * as P from "./parts";
import { ButtonProps } from "components/generics/Button/constants";
import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren<ButtonProps>) => {
  return <P.Button>{children}</P.Button>;
};

export default Button;
