import React from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { walletMainStatsSelector } from "state";
import * as P from "./parts";

const OptionsSection = () => {
  const mainWalletMainStats = useAppSelector(walletMainStatsSelector);

  return (
    <P.Wrapper>
      {mainWalletMainStats.map((stat) => (
        <P.Card>
          <P.CardHeader>{stat.label}</P.CardHeader>
          <P.CardBody>{stat.value}</P.CardBody>
        </P.Card>
      ))}
    </P.Wrapper>
  );
};

export default OptionsSection;
