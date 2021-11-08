import RegularList from "components/generics/RegularList";
import { Title } from "components/generics/Title/parts";
import UpgradeCard from "components/generics/UpgradeCard";
import { useAppSelector } from "hooks/useAppSelector";
import { UpgradesSectionProps } from "./constants";
import * as P from "./parts";

const UpgradesSection = ({}: UpgradesSectionProps): JSX.Element => {
  const heroes = useAppSelector((state) => state.heroes);

  return (
    <P.Wrapper>
      <Title>Upgrades</Title>
      <RegularList itemComponent={UpgradeCard} resourceName="hero" items={heroes} />
    </P.Wrapper>
  );
};

export default UpgradesSection;
