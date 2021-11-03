import { createContext, useState } from "react";
import { GameContextValue, GameContextProviderProps, TIME_BETWEEN_INTERVAL_TICK } from "./constants";
import { isNumber } from "utils/isNumber";

const GameContext = createContext({} as GameContextValue);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gameIntervalId, setGameIntervalId] = useState<number | null>(null);

  /**
   * Clears game interval - returns true if cleared / false if not (interval was not active)
   */
  const stopGameInterval = () => {
    //  only if interval is running
    if (isNumber(gameIntervalId)) {
      clearInterval(gameIntervalId);
      setGameIntervalId(null);
      return true;
    }

    return false;
  };

  /**
   * Starts game interval - returns true if started / false if not (interval already running)
   */
  const startGameInterval = () => {
    //  only if interval is NOT running
    if (isNumber(gameIntervalId)) return gameIntervalId;

    const intervalId = window.setInterval(handleIntervalTick, TIME_BETWEEN_INTERVAL_TICK);
    setGameIntervalId(intervalId);

    return intervalId;
  };

  const handleIntervalTick = () => {
    //  TODO: add logic to handle interval ticks
    console.log("Interval is running!");
  };

  return (
    <GameContext.Provider value={{ intervalId: gameIntervalId, stopGameInterval, startGameInterval }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
