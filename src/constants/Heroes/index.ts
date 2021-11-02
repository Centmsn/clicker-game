import * as U from "constants/Upgrades";

export type HeroNames = "Hero 1" | "Hero 2";

export interface HeroBase {
  id: string;
  incrementPerSecond: number;
  name: HeroNames;
  level: number;
  price: number;
  heroPriceIncrement: number;
  upgrades: Array<U.UpgradeBase>;
}

export const HERO_T_0: HeroBase = {
  id: "hT0",
  incrementPerSecond: 1,
  level: 0,
  price: 25,
  name: "Hero 1",
  heroPriceIncrement: 1.1,
  upgrades: U.UPGRADES_T_0,
};
