import { useContext } from "react";
import { ToastVariants } from "components/generics/Toast";
import Button from "components/generics/Button";
import Checkbox from "components/generics/Checkbox";
import { useAppSelector } from "hooks/useAppSelector";
import { saveItemToLS } from "utils/localStorage/saveItem";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { captureStoreState } from "utils/captureStoreState";
import ToastStackContext from "contexts/ToastStackContext";
import GameContext from "contexts/GameContext";
import * as P from "./parts";

const OptionsTab = () => {
  const appState = useAppSelector((state) => state);
  const { openNewToast } = useContext(ToastStackContext);
  const { startAutosave, stopAutosave, isAutosaveEnabled } = useContext(GameContext);

  const handleSaveGame = () => {
    saveItemToLS(LocalStorageKeys.gameState, captureStoreState(appState));
    openNewToast("Game saved!", ToastVariants.GREEN);
  };

  const toggleAutosave = () => {
    if (isAutosaveEnabled) {
      const disabledCorrectly = stopAutosave();

      if (disabledCorrectly) {
        openNewToast("Autosave DISABLED", ToastVariants.YELLOW);
      }
    } else {
      const enabledCorrectly = startAutosave();

      if (enabledCorrectly) {
        openNewToast("Autosave ENABLED", ToastVariants.GREEN);
      }
    }
  };

  // TODO: refactor to list component
  return (
    <P.Wrapper>
      <P.OptionWrapper>
        <P.Description>Click to manually save the game</P.Description>
        <Button onClick={handleSaveGame}>Save game</Button>
      </P.OptionWrapper>

      <P.OptionWrapper>
        <P.Description>Enable autosave (every 5 minutes)</P.Description>
        <Checkbox onClick={toggleAutosave} label="Test" isChecked={isAutosaveEnabled} />
      </P.OptionWrapper>
    </P.Wrapper>
  );
};

export default OptionsTab;
