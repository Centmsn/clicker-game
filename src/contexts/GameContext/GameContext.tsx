import { createContext, useEffect, useState, useRef } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { updateTabTitle } from "./utils";
import { isNumber } from "utils/isNumber";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { captureStoreState } from "utils/captureStoreState";
import { saveItemToLS } from "utils/localStorage/saveItem";

import { addToWallet } from "state";
import {
  GameContextValue,
  GameContextProviderProps,
  TIME_BETWEEN_INTERVAL_TICK,
  TIME_BETWEEN_AUTOSAVE,
} from "./constants";

const GameContext = createContext({} as GameContextValue);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gameIntervalId, setGameIntervalId] = useState<number | null>(null);
  const [autosaveIntervalId, setAutosaveIntervalId] = useState<number | null>(null);
  const appState = useAppSelector((state) => state);
  const { incrementPerSecond, value } = useAppSelector((state) => state.wallet);
  const callbackRef = useRef<() => void>();
  const dispatch = useAppDispatch();
  const isAutosaveEnabled = isNumber(autosaveIntervalId);

  useEffect(() => {
    callbackRef.current = handleIntervalTick;
  });

  const startAutosave = () => {
    if (!autosaveIntervalId) {
      const timeoutId = window.setInterval(() => {
        updateSavedGame();
      }, TIME_BETWEEN_AUTOSAVE);

      setAutosaveIntervalId(timeoutId);
      return true;
    }

    return false;
  };

  const stopAutosave = () => {
    if (autosaveIntervalId) {
      clearInterval(autosaveIntervalId);
      setAutosaveIntervalId(null);
      return true;
    }

    return false;
  };

  const updateSavedGame = () => {
    saveItemToLS(LocalStorageKeys.gameState, captureStoreState(appState));
  };

  const stopGameInterval = () => {
    if (isNumber(gameIntervalId)) {
      clearInterval(gameIntervalId);
      setGameIntervalId(null);
      return true;
    }

    return false;
  };

  const startGameInterval = () => {
    if (isNumber(gameIntervalId)) return gameIntervalId;
    const intervalId = window.setInterval(
      () => callbackRef.current && callbackRef.current(),
      TIME_BETWEEN_INTERVAL_TICK
    );
    setGameIntervalId(intervalId);
    return intervalId;
  };

  const handleIntervalTick = () => {
    dispatch(addToWallet(incrementPerSecond));
    updateTabTitle(value);
  };

  return (
    <GameContext.Provider
      value={{
        intervalId: gameIntervalId,
        stopGameInterval,
        startGameInterval,
        startAutosave,
        stopAutosave,
        isAutosaveEnabled,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
