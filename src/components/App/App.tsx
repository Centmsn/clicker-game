import StatsSection from "components/StatsSection";
import * as P from "./parts";
import React from "react";
import OptionsSection from "components/OptionsSection";
import MainSection from "components/MainSection";
import UpgradesSection from "components/UpgradesSection";

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
