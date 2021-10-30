import { Title } from "components/generics/Title/parts";
import UpgradeCard from "components/generics/UpgradeCard";
import { UpgradesSectionProps } from "./constants";
import * as P from "./parts";

const UpgradesSection = ({}: UpgradesSectionProps): JSX.Element => {
  return (
    <P.Wrapper>
      <Title>Upgrades</Title>
      <UpgradeCard />
    </P.Wrapper>
  );
};

export default UpgradesSection;
