import { PropsWithChildren, useState } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";
import { useAppSelector } from "hooks/useAppSelector";
import { StatsSectionProps } from "./constants";
import * as P from "./parts";
import Toast from "components/generics/Toast";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  const wallet = useAppSelector((state) => state.wallet);

  const [isToastUp, setIsToastUp] = useState(false);

  return (
    <P.Wrapper>
      <Toast isDisplay={isToastUp} onClose={setIsToastUp} />
      <Title>Statistics</Title>
      <Stats label={`Gold: ${wallet.value}`} />
      <Stats label={`Gold per second: ${wallet.incrementPerSecond}`} />
      <Button
        onClick={function () {
          setIsToastUp(true);
        }}
        variant="primary"
      >
        click me
      </Button>
    </P.Wrapper>
  );
};

export default StatsSection;
