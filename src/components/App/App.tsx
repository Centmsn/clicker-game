import StatsSection from "components/StatsSection";
import OptionsSection from "components/OptionsSection";
import MainSection from "components/MainSection";
import * as P from "./parts";

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
