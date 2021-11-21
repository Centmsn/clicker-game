import React from "react";
import { useAppSelector } from "hooks/useAppSelector";
import Button from "components/generics/Button";
import Title from "components/generics/Title";
import { saveItemToLS } from "utils/localStorage/saveItem";
import { ButtonVariants } from "components/generics/Button/constants";
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
      <Title variant="large">Options</Title>
      <Button variant={ButtonVariants.secondary} onClick={handleSaveGame}>
        Save
      </Button>
    </P.Wrapper>
  );
};

export default OptionsSection;
