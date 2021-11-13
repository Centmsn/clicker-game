export const LOCAL_STORAGE_APP_KEY = "clickerGame";

export enum LocalStorageKeys {
  gameState = "gameState",
}

export type LocalStorage = Record<LocalStorageKeys, string>;
