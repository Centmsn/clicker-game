import React from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { walletSelector } from "state";
import * as P from "./parts";

const OptionsSection = () => {
  const mainWallet = useAppSelector(walletSelector);

  return (
    <P.Wrapper>
      {Object.entries(mainWallet).map(([key, value], index) => (
        <P.Card>
          <P.CardHeader>{key}</P.CardHeader>
          <P.CardBody>{value}</P.CardBody>
        </P.Card>
      ))}
    </P.Wrapper>
  );
};

export default OptionsSection;
