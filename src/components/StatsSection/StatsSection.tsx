import { PropsWithChildren } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";
import { StatsSectionProps } from "./constants";
import * as P from "./parts";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  return (
    <P.Wrapper>
      <Title>Statistics</Title>
      <Stats label="dmg per second" />
      <Stats label="money per second" />
      <Stats label="overal kills" />
      <Button variant="primary">click me</Button>
    </P.Wrapper>
  );
};

export default StatsSection;
