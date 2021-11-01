import * as P from "./parts";
import { ButtonProps } from "components/generics/Button/constants";
import { PropsWithChildren } from "react";

const Button = ({ children, click }: PropsWithChildren<ButtonProps>) => {
  return <P.Button onClick={click}>{children}</P.Button>;
};

export default Button;
