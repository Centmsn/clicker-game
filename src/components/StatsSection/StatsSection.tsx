import { PropsWithChildren } from "react";
import { StatsSectionProps } from "./constants";
import Title from "components/generics/Title";
import * as P from "./parts";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  return (
    <P.Wrapper>
      <Title>Statistics</Title>
      <Stats stat={"dmg per second"} />
      <Stats stat={"money per second"} />
      <Stats stat={"overal kills"} />
      <Button variant={"blue"}>click me</Button>
    </P.Wrapper>
  );
};

export default StatsSection;
