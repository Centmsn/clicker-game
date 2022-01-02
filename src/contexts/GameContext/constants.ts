import React from "react";

export const TIME_BETWEEN_INTERVAL_TICK = 1000;

export const TIME_BETWEEN_AUTOSAVE = 300_000; // 5 minutes

export interface GameContextValue {
  intervalId: number | null;
  stopGameInterval: () => boolean;
  startGameInterval: () => number;
  startAutosave: () => boolean;
  stopAutosave: () => boolean;
  isAutosaveEnabled: boolean;
}

export interface GameContextProviderProps {
  children: React.ReactNode;
}
