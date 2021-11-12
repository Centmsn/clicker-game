import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcPrice } from "utils/calcPrice";
import { initialState } from "./constants";
import { validateAmount } from "./utils";

export const heroesSlice = createSlice({
  name: "Upgrades",
  initialState,
  reducers: {
    increaseUpgradeLevel: (state, action: PayloadAction<{ heroId: string; tier: number; amount: number }>) => {
      const {
        payload: { amount, tier, heroId },
      } = action;

      validateAmount(amount);

      const selectedHero = state.find((hero) => hero.id === heroId);

      if (selectedHero) {
        const maxTier = selectedHero.upgrades.length - 1;
        validateAmount(tier, 0, maxTier);

        const selectedUpgradeTier = selectedHero.upgrades[tier];

        selectedUpgradeTier.upgradeLevel += amount;
        selectedUpgradeTier.price = calcPrice(
          selectedUpgradeTier.price,
          selectedUpgradeTier.upgradePriceIncrement,
          amount
        );
      }
    },

    increaseHeroLevel: (state, action: PayloadAction<{ heroId: string; amount: number }>) => {
      const {
        payload: { amount, heroId },
      } = action;

      validateAmount(amount);

      const selectedHero = state.find((hero) => hero.id === heroId);

      if (selectedHero) {
        selectedHero.heroLevel += amount;
        selectedHero.price = calcPrice(selectedHero.price, selectedHero.heroPriceIncrement, amount);
      }
    },
  },
});

export const { increaseHeroLevel, increaseUpgradeLevel } = heroesSlice.actions;

export default heroesSlice.reducer;
