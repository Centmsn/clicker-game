import { PropsWithChildren, useState } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import { useAppSelector } from "hooks/useAppSelector";
import { totalUpgradesSelector, totalHeroLevelSelector } from "state";
import { StatsSectionProps, StatsObject } from "./constants";
import * as P from "./parts";

const modalDuration = 5000;

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const totalUpgradesLevel = useAppSelector(totalUpgradesSelector);
  const totalHeroLevel = useAppSelector(totalHeroLevelSelector);

  const popupToast = () => {
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), modalDuration);
  };

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
      <Title variant="large">Statistics</Title>
      {stats.map(({ label, value }) => (
        <Stats label={`${label} ${value}`} />
      ))}
    </P.Wrapper>
  );
};

export default StatsSection;
