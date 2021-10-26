import { PropsWithChildren } from "react";
import { StatsSectionProps } from "./constants";
import Title from "components/generics/Title";
import * as P from "./parts";
import Stats from "components/generics/Stats";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  return (
    <P.Wrapper>
      <Title>Statistics</Title>
      <Stats />
    </P.Wrapper>
  );
};

export default StatsSection;
