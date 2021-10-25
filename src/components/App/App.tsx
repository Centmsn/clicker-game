import StatsSection from "components/StatsSection";
import React from "react";
import Title from "components/generics/Title";
import OptionsSection from "components/OptionsSection";

const App = () => {
  return (
    <>
      <StatsSection>
        <Title>Stats</Title>
      </StatsSection>
      <OptionsSection />
    </>
  );
};

export default App;
