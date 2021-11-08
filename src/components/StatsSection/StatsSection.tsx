import { PropsWithChildren } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";
import { useAppSelector } from "hooks/useAppSelector";
import { totalUpgradesSelector, totalHeroLevelSelector } from "state";
import { StatsSectionProps, StatsObject } from "./constants";
import * as P from "./parts";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  const wallet = useAppSelector((state) => state.wallet);
  const totalUpgradesLevel = useAppSelector(totalUpgradesSelector);
  const totalHeroLevel = useAppSelector(totalHeroLevelSelector);

  const stats: StatsObject = [
    {
      label: "Gold:",
      value: wallet.value,
    },
    {
      label: "Gold per second:",
      value: wallet.incrementPerSecond,
    },
    {
      label: "Total upgrade level:",
      value: totalUpgradesLevel,
    },
    {
      label: "Total hero level:",
      value: totalHeroLevel,
    },
  ];

  return (
    <P.Wrapper>
      <Title>Statistics</Title>
      {stats.map(({ label, value }) => (
        <Stats label={`${label} ${value}`} />
      ))}
      <Button variant="primary" onClick={() => {}}>
        click me
      </Button>
    </P.Wrapper>
  );
};

export default StatsSection;
