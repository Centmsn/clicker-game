import React from "react";
import { useAppSelector } from "hooks/useAppSelector";
import Button from "components/generics/Button";
import { Title } from "components/generics/Title/parts";
import { saveItemToLS } from "utils/localStorage/saveItem";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { captureStoreState } from "utils/captureStoreState";
import * as P from "./parts";

const OptionsSection = () => {
  const appState = useAppSelector((state) => state);
  const handleSaveGame = () => {
    saveItemToLS(LocalStorageKeys.gameState, captureStoreState(appState));
  };

  return (
    <P.Wrapper>
      <Title>Options</Title>
      <Button onClick={handleSaveGame}>Save</Button>
    </P.Wrapper>
  );
};

export default OptionsSection;
