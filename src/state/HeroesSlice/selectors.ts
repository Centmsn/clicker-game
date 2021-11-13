import { RootState } from "state";
import { sumArray } from "utils/sumArray";

export const heroesSelector = (state: RootState) => state.heroes;
export const totalUpgradesSelector = (state: RootState) =>
  sumArray(state.heroes.map((hero) => hero.upgrades.reduce((acc, current) => acc + current.upgradeLevel, 0)));
export const totalHeroLevelSelector = (state: RootState) => sumArray(state.heroes.map((hero) => hero.heroLevel));
