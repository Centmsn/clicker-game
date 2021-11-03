import * as P from "./parts";
import { ButtonProps } from "components/generics/Button/constants";
import { PropsWithChildren } from "react";

const Button = ({ children, onClick }: PropsWithChildren<ButtonProps>) => {
  return <P.Button onClick={onClick}>{children}</P.Button>;
};

export default Button;
