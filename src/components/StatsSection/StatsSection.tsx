import { PropsWithChildren } from "react";
import { StatsSectionProps } from "./constants";
import * as P from "./parts";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  return <P.Wrapper>{children}</P.Wrapper>;
};

export default StatsSection;
