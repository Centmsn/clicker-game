import { PropsWithChildren } from "react";
import { TitleProps } from "./constants";
import * as P from "./parts";

const Title = ({ children, variant }: PropsWithChildren<TitleProps>): JSX.Element => {
  return <P.Title variant={variant}>{children}</P.Title>;
};

export default Title;
