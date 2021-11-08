import { PropsWithChildren, useRef, useState } from "react";
import Title from "components/generics/Title";
import Stats from "components/generics/Stats";
import Button from "components/generics/Button";
import { useAppSelector } from "hooks/useAppSelector";
import { StatsSectionProps } from "./constants";
import * as P from "./parts";

const StatsSection = ({ children }: PropsWithChildren<StatsSectionProps>): JSX.Element => {
  const wallet = useAppSelector((state) => state.wallet);

  const [isToastUp, setIsToastUp] = useState(false);

  const popupToast = () => {
    setIsToastUp(true);
    setTimeout(() => setIsToastUp(false), 5000);
  };

  return (
    <P.Wrapper>
      {/* <Toast refer={toastRef} isDisplay={isToastUp} onClose={setIsToastUp} /> */}
      <Title>Statistics</Title>
      <Stats label={`Gold: ${wallet.value}`} />
      <Stats label={`Gold per second: ${wallet.incrementPerSecond}`} />
      <Button onClick={() => popupToast()} variant="primary">
        click me
      </Button>
    </P.Wrapper>
  );
};

export default StatsSection;
