import { PropsWithChildren } from "react";
import { StatsSectionProps } from "./constants";
import Title from "components/generics/Title";
import * as P from "./parts";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";

const StatsSection = ({ toggleModal }: StatsSectionProps): JSX.Element => {
  return (
    <P.Wrapper>
      <Title>Statistics</Title>
      <Stats label="dmg per second" />
      <Stats label="money per second" />
      <Stats label="overal kills" />
      <Button click={() => toggleModal(true)} variant="variantOne">
        click me
      </Button>
    </P.Wrapper>
  );
};

export default StatsSection;
