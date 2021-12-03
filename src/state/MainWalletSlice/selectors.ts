import { createSelector } from "reselect";
import { RootState } from "state";

export const walletGoldPerClickSelector = (state: RootState) => state.wallet.goldPerClick;
export const walletValueSelector = (state: RootState) => state.wallet.value;
export const walletUpgradesPerClickSelector = (state: RootState) => state.wallet.upgradesPerClick;
export const walletIpsSelector = (state: RootState) => state.wallet.incrementPerSecond;
export const walletSelector = (state: RootState) => state.wallet;
export const walletMainStatsSelector = createSelector(
  walletGoldPerClickSelector,
  walletValueSelector,
  walletIpsSelector,
  (goldPerClick, walletValue, Ips) => {
    return [
      {
        value: goldPerClick,
        label: "Gold per click",
      },
      {
        value: Ips,
        label: "Gold per second",
      },
      {
        value: walletValue,
        label: "Gold",
      },
    ];
  }
);
