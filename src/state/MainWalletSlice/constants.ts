export const INITIAL_WALLET_VALUE = 0;
export const INITIAL_INCREMENT = 0;
export const MIN_WALLET_VALUE = 0;
export const MIN_INCREMENT = 0;

export interface WalletState {
  value: number;
  incrementPerSecond: number;
}

export const initialState: WalletState = {
  value: INITIAL_WALLET_VALUE,
  incrementPerSecond: INITIAL_INCREMENT,
};
