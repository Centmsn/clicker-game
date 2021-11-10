import RegularList from "components/generics/RegularList";
import { Title } from "components/generics/Title/parts";
import UpgradeCard, { CardSkeleton } from "components/generics/UpgradeCard";
import { useAppSelector } from "hooks/useAppSelector";
import { walletIpsSelector, heroesSelector } from "state";
import { UpgradesSectionProps } from "./constants";
import * as P from "./parts";

const UpgradesSection = ({}: UpgradesSectionProps): JSX.Element => {
  const incrementPerSecond = useAppSelector(walletIpsSelector);
  const heroes = useAppSelector(heroesSelector);

  const renderHeroCards = () => {
    let isFirstLockedHero = true;

    return heroes.map((hero) => {
      const isUnlocked = incrementPerSecond >= hero.unlockCondition;

      if (isUnlocked) {
        return <UpgradeCard {...hero} key={hero.id} />;
      } else if (isFirstLockedHero) {
        isFirstLockedHero = false;
        return <CardSkeleton unlockCondition={hero.unlockCondition} />;
      }

      return null;
    });
  };

  return (
    <P.Wrapper>
      <Title>Upgrades</Title>
      <RegularList itemComponent={UpgradeCard} resourceName="hero" items={heroes} />
    </P.Wrapper>
  );
};

export default UpgradesSection;
