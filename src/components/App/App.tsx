import StatsSection from "components/StatsSection";
import { useState } from "react";
import * as P from "./parts";
import React from "react";
import OptionsSection from "components/OptionsSection";
import MainSection from "components/MainSection";
import Modal from "components/generics/Modal";

const App = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <P.Container>
      <StatsSection toggleModal={setIsDisplay} />
      <MainSection />
      <OptionsSection />
      {isDisplay && <Modal toggleModal={setIsDisplay} content="Tutaj zamieść treść ..." />}
    </P.Container>
  );
};

export default App;
