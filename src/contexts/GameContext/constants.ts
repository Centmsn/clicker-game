import React from "react";

export const TIME_BETWEEN_INTERVAL_TICK = 1000;

export interface GameContextValue {
  intervalId: number | null;
  stopGameInterval: () => boolean;
  startGameInterval: () => number;
}

export interface GameContextProviderProps {
  children: React.ReactNode;
}
