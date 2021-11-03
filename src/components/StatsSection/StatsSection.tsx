import { PropsWithChildren } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";
import { useAppSelector } from "hooks/useAppSelector";
import { StatsSectionProps } from "./constants";
import * as P from "./parts";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  const wallet = useAppSelector((state) => state.wallet);

  return (
    <P.Wrapper>
      <Title>Statistics</Title>
      <Stats label={`Gold: ${wallet.value}`} />
      <Stats label={`Gold per second: ${wallet.incrementPerSecond}`} />
      <Button variant="variantOne">click me</Button>
    </P.Wrapper>
  );
};

export default StatsSection;
