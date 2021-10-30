import { Title } from "components/generics/Title/parts";
import { UpgradesSectionProps } from "./constants";
import * as P from "./parts";

const UpgradesSection = ({}: UpgradesSectionProps): JSX.Element => {
  return (
    <P.Wrapper>
      <Title>Upgrades</Title>
    </P.Wrapper>
  );
};

export default UpgradesSection;
