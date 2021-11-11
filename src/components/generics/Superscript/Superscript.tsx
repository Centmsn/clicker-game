import { SuperscriptProps } from "./constants";
import * as P from "./parts";

const Superscript = ({ children }: SuperscriptProps) => {
  return <P.Sup>{children}</P.Sup>;
};

export default Superscript;
