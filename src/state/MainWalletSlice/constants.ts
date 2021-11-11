import { RootState } from "state";
import { getItemFromLS } from "utils/localStorage/getItem";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { isEmpty } from "utils/isEmpty";

export const INITIAL_WALLET_VALUE = 0;
export const INITIAL_INCREMENT = 0;
export const MIN_WALLET_VALUE = 0;
export const MIN_INCREMENT = 0;

export interface WalletState {
  value: number;
  incrementPerSecond: number;
}

const savedInitialState: RootState = JSON.parse(getItemFromLS(LocalStorageKeys.gameState) || "{}");
const defaultInitialState = {
  value: INITIAL_WALLET_VALUE,
  incrementPerSecond: INITIAL_INCREMENT,
};

export const initialState: WalletState = isEmpty(savedInitialState) ? defaultInitialState : savedInitialState.wallet;
