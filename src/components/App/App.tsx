import React, { useContext, useEffect } from "react";
import StatsSection from "components/StatsSection";
import OptionsSection from "components/BottomSection";
import MainSection from "components/MainSection";
import UpgradesSection from "components/UpgradesSection";
import GameContext from "contexts/GameContext";
import * as P from "./parts";

const App = () => {
  const gameContext = useContext(GameContext);

  useEffect(() => {
    gameContext.startGameInterval();
  }, [gameContext]);

  return (
    <P.Container>
      <StatsSection />
      <MainSection />
      <OptionsSection />
      <UpgradesSection />
    </P.Container>
  );
};

export default App;
