import { useContext, useState } from "react";
import { ToastVariants } from "components/generics/Toast";
import Button, { ButtonSizes } from "components/generics/Button";
import Checkbox from "components/generics/Checkbox";
import { useAppSelector } from "hooks/useAppSelector";
import { saveItemToLS } from "utils/localStorage/saveItem";
import { LocalStorageKeys, LOCAL_STORAGE_APP_KEY } from "utils/localStorage/constants";
import { captureStoreState } from "utils/captureStoreState";
import ToastStackContext from "contexts/ToastStackContext";
import GameContext from "contexts/GameContext";
import * as P from "./parts";
import Modal from "components/generics/Modal";
import { useAppDispatch } from "hooks/useAppDispatch";
import { resetHeroesState, resetWalletState } from "state";

const OptionsTab = () => {
  const appState = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { openNewToast } = useContext(ToastStackContext);
  const { startAutosave, stopAutosave, isAutosaveEnabled } = useContext(GameContext);
  const [displayResetGameConfirmation, setDisplayResetGameConfirmation] = useState(false);

  const handleSaveGame = () => {
    saveItemToLS(LocalStorageKeys.gameState, captureStoreState(appState));
    openNewToast("Game saved!", ToastVariants.GREEN);
  };

  const handleRestartGame = () => {
    localStorage.removeItem(LOCAL_STORAGE_APP_KEY);
    openNewToast("Game restarted!", ToastVariants.RED);
    dispatch(resetWalletState());
    dispatch(resetHeroesState());
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
        <Button onClick={handleSaveGame} size={ButtonSizes.SMALL}>
          Save game
        </Button>
      </P.OptionWrapper>

      {displayResetGameConfirmation && (
        <Modal
          onConfirm={handleRestartGame}
          setVisible={setDisplayResetGameConfirmation}
          isVisible={displayResetGameConfirmation}
        >
          Are you sure restart the game ?
        </Modal>
      )}

      <P.OptionWrapper>
        <P.Description>Click to restart game</P.Description>
        <Button
          onClick={() => setDisplayResetGameConfirmation((value) => !value)}
          isDisabled={displayResetGameConfirmation}
          size={ButtonSizes.LARGE}
        >
          Restart game
        </Button>
      </P.OptionWrapper>

      <P.OptionWrapper>
        <P.Description>Enable autosave (every 5 minutes)</P.Description>
        <Checkbox onClick={toggleAutosave} isChecked={isAutosaveEnabled} />
      </P.OptionWrapper>
    </P.Wrapper>
  );
};

export default OptionsTab;
