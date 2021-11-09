import { createContext, useEffect, useState, useRef } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { isNumber } from "utils/isNumber";
import { addToWallet, walletIpsSelector } from "state";
import { GameContextValue, GameContextProviderProps, TIME_BETWEEN_INTERVAL_TICK } from "./constants";

const GameContext = createContext({} as GameContextValue);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gameIntervalId, setGameIntervalId] = useState<number | null>(null);
  const incrementPerSecond = useAppSelector(walletIpsSelector);
  const callbackRef = useRef<() => void>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    callbackRef.current = handleIntervalTick;
  });

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
  };

  return (
    <GameContext.Provider value={{ intervalId: gameIntervalId, stopGameInterval, startGameInterval }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
