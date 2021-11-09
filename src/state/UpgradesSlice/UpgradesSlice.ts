import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcPrice } from "utils/calcPrice";
import { validateAmount } from "./utils";
// TODO: refactor import and initial state to be more flexible - should not require to add each hero manually
import { HERO_T_0, HeroBase, HERO_T_1, HERO_T_2 } from "constants/Heroes";

const initialState: Array<HeroBase> = [HERO_T_0, HERO_T_1, HERO_T_2];

export const upgradesSlice = createSlice({
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

export const { increaseHeroLevel, increaseUpgradeLevel } = upgradesSlice.actions;

export default upgradesSlice.reducer;
