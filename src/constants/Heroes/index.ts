import * as U from "constants/Upgrades";

export type HeroNames = "Hero 1" | "Hero 2" | "Hero 3";

export interface HeroBase {
  id: string;
  incrementPerSecond: number;
  name: HeroNames;
  heroLevel: number;
  price: number;
  heroPriceIncrement: number;
  upgrades: Array<U.UpgradeBase>;
}

export const HERO_T_0: HeroBase = {
  id: "hT0",
  incrementPerSecond: 1,
  heroLevel: 0,
  price: 25,
  name: "Hero 1",
  heroPriceIncrement: 1.1,
  upgrades: U.UPGRADES_T_0,
};

export const HERO_T_1: HeroBase = {
  id: "hT1",
  incrementPerSecond: 5,
  heroLevel: 0,
  price: 100,
  name: "Hero 2",
  heroPriceIncrement: 1.1,
  upgrades: U.UPGRADES_T_0,
};

export const HERO_T_2: HeroBase = {
  id: "hT2",
  incrementPerSecond: 20,
  heroLevel: 0,
  price: 850,
  name: "Hero 3",
  heroPriceIncrement: 1.1,
  upgrades: U.UPGRADES_T_0,
};
