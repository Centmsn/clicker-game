import { PropsWithChildren } from "react";
import { TitleProps } from "./constants";
import * as P from "./parts";

const Title = ({ children }: PropsWithChildren<TitleProps>): JSX.Element => {
  return <P.Title variant="secondary">{children}</P.Title>;
};

export default Title;
