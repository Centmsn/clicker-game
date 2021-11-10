import * as U from "constants/Upgrades";
import Hero1 from "assets/Hero_Assets/Pink_Monster.png";
import Hero2 from "assets/Hero_Assets/Owlet_Monster.png";
import Hero3 from "assets/Hero_Assets/Dude_Monster.png";

export type HeroNames = "Akio" | "Eferd" | "Ingrid";

export interface HeroBase {
  id: string;
  incrementPerSecond: number;
  name: HeroNames;
  heroLevel: number;
  price: number;
  heroPriceIncrement: number;
  upgrades: Array<U.UpgradeBase>;
  portrait: string;
  unlockCondition: number;
}

export const HERO_T_0: HeroBase = {
  id: "hT0",
  incrementPerSecond: 1,
  heroLevel: 0,
  price: 25,
  name: "Akio",
  heroPriceIncrement: 1.1,
  upgrades: U.UPGRADES_T_0,
  portrait: Hero1,
  unlockCondition: 0,
};

export const HERO_T_1: HeroBase = {
  id: "hT1",
  incrementPerSecond: 5,
  heroLevel: 0,
  price: 100,
  name: "Eferd",
  heroPriceIncrement: 1.1,
  upgrades: U.UPGRADES_T_0,
  portrait: Hero2,
  unlockCondition: 10,
};

export const HERO_T_2: HeroBase = {
  id: "hT2",
  incrementPerSecond: 20,
  heroLevel: 0,
  price: 850,
  name: "Ingrid",
  heroPriceIncrement: 1.1,
  upgrades: U.UPGRADES_T_0,
  portrait: Hero3,
  unlockCondition: 500,
};
