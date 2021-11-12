import { RootState } from "state";

export const walletGoldPerClickSelector = (state: RootState) => state.wallet.goldPerClick;
export const walletValueSelector = (state: RootState) => state.wallet.value;
export const walletIpsSelector = (state: RootState) => state.wallet.incrementPerSecond;
export const walletSelector = (state: RootState) => state.wallet;
