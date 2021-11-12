export const INITIAL_WALLET_VALUE = 0;
export const INITIAL_INCREMENT = 0;
export const INITIAL_GOLD_PER_CLICK = 1;
export const MIN_WALLET_VALUE = 0;
export const MIN_INCREMENT = 0;

export interface WalletState {
  value: number;
  incrementPerSecond: number;
  goldPerClick: number;
}

export const initialState: WalletState = {
  value: INITIAL_WALLET_VALUE,
  incrementPerSecond: INITIAL_INCREMENT,
  goldPerClick: INITIAL_GOLD_PER_CLICK,
};
