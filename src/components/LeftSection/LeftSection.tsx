import { PropsWithChildren } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import { useAppSelector } from "hooks/useAppSelector";
import { totalUpgradesSelector, totalHeroLevelSelector } from "state";
import { StatsSectionProps, StatsObject } from "./constants";
import * as P from "./parts";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  const totalUpgradesLevel = useAppSelector(totalUpgradesSelector);
  const totalHeroLevel = useAppSelector(totalHeroLevelSelector);

  const stats: StatsObject = [
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
    </P.Wrapper>
  );
};

export default StatsSection;
