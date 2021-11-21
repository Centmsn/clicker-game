import { PropsWithChildren, useState } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";
import { ButtonSizes, ButtonVariants } from "components/generics/Button/constants";
import { useAppSelector } from "hooks/useAppSelector";
import { totalUpgradesSelector, totalHeroLevelSelector, walletSelector, walletGoldPerClickSelector } from "state";
import { StatsSectionProps, StatsObject } from "./constants";
import * as P from "./parts";

const modalDuration = 5000;

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const wallet = useAppSelector(walletSelector);
  const totalUpgradesLevel = useAppSelector(totalUpgradesSelector);
  const totalHeroLevel = useAppSelector(totalHeroLevelSelector);
  const goldPerClick = useAppSelector(walletGoldPerClickSelector);

  const popupToast = () => {
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), modalDuration);
  };

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
    {
      label: "Gold per click:",
      value: goldPerClick,
    },
  ];

  return (
    <P.Wrapper>
      <Title variant="large">Statistics</Title>
      {stats.map(({ label, value }) => (
        <Stats label={`${label} ${value}`} />
      ))}
      <Button size={ButtonSizes.LARGE} variant={ButtonVariants.PRIMARY} onClick={() => {}}>
        click me
      </Button>
    </P.Wrapper>
  );
};

export default StatsSection;
