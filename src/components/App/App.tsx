import React, { useContext, useEffect } from "react";
import StatsSection from "components/StatsSection";
import OptionsSection from "components/OptionsSection";
import MainSection from "components/MainSection";
import UpgradesSection from "components/UpgradesSection";
import GameContext from "contexts/GameContext";
import * as P from "./parts";
import Toast from "components/generics/Toast";

const App = () => {
  const gameContext = useContext(GameContext);

  useEffect(() => {
    gameContext.startGameInterval();
  }, [gameContext]);

  return (
    <P.Container>
      <Toast />
      <StatsSection />
      <MainSection />
      <OptionsSection />
      <UpgradesSection />
    </P.Container>
  );
};

export default App;
