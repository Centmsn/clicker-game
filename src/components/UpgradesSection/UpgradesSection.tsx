import { Title } from "components/generics/Title/parts";
import UpgradeCard from "components/generics/UpgradeCard";
import { useAppSelector } from "hooks/useAppSelector";
import { UpgradesSectionProps } from "./constants";
import * as P from "./parts";

const UpgradesSection = ({}: UpgradesSectionProps): JSX.Element => {
  const heroes = useAppSelector((state) => state.heroes);

  const renderHeroCards = () => {
    return heroes.map((hero) => <UpgradeCard {...hero} key={hero.id} />);
  };

  return (
    <P.Wrapper>
      <Title>Upgrades</Title>
      {renderHeroCards()}
    </P.Wrapper>
  );
};

export default UpgradesSection;
