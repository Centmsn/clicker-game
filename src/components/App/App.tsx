import StatsSection from "components/StatsSection";
import * as P from "./parts";
import React from "react";
import OptionsSection from "components/OptionsSection";
import MainSection from "components/MainSection";

const App = () => {
  return (
    <P.Container>
      <StatsSection />
      <MainSection />
      <OptionsSection />
    </P.Container>
  );
};

export default App;
