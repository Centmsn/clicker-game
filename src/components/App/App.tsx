import React from "react";
import StatsSection from "components/StatsSection";
import OptionsSection from "components/OptionsSection";
import MainSection from "components/MainSection";
import UpgradesSection from "components/UpgradesSection";
import * as P from "./parts";

const App = () => {
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
