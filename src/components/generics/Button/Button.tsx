import * as P from "./parts";
import { ButtonProps } from "components/generics/Button/constants";

const Button = ({ children, variant }: ButtonProps) => {
  return <P.Button>{children}</P.Button>;
};

export default Button;
