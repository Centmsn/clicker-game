import { RootState } from "state";
import { getItemFromLS } from "utils/localStorage/getItem";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { isEmpty } from "utils/isEmpty";

export const INITIAL_WALLET_VALUE = 0;
export const INITIAL_INCREMENT = 0;
export const INITIAL_GOLD_PER_CLICK = 1;
export const MIN_WALLET_VALUE = 0;
export const MIN_INCREMENT = 0;
export const INITIAL_UPGRADES_PER_CLICK = 1;

export interface WalletState {
  value: number;
  incrementPerSecond: number;
  goldPerClick: number;
  upgradesPerClick: number;
}

const savedInitialState: RootState = JSON.parse(getItemFromLS(LocalStorageKeys.gameState) || "{}");
const defaultInitialState = {
  value: INITIAL_WALLET_VALUE,
  incrementPerSecond: INITIAL_INCREMENT,
  goldPerClick: INITIAL_GOLD_PER_CLICK,
  upgradesPerClick: INITIAL_UPGRADES_PER_CLICK,
};

export const initialState: WalletState = isEmpty(savedInitialState) ? defaultInitialState : savedInitialState.wallet;
