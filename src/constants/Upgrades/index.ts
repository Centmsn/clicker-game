export type UpgradeNames = "Weapon" | "Shield" | "Other";

export interface UpgradeBase {
  incrementPerSecond: number;
  price: number;
  upgradePriceIncrement: number;
  name: UpgradeNames;
  level: number;
  requiredLevel: number;
}

export const UPGRADES_T_0: Array<UpgradeBase> = [
  {
    incrementPerSecond: 1,
    name: "Weapon",
    level: 0,
    requiredLevel: 0,
    price: 100,
    upgradePriceIncrement: 1.05,
  },
  {
    incrementPerSecond: 25,
    name: "Shield",
    level: 0,
    requiredLevel: 10,
    price: 2500,
    upgradePriceIncrement: 1.1,
  },
  {
    incrementPerSecond: 100,
    name: "Other",
    level: 0,
    requiredLevel: 20,
    price: 15000,
    upgradePriceIncrement: 1.2,
  },
  {
    incrementPerSecond: 500,
    name: "Other",
    level: 0,
    requiredLevel: 30,
    price: 75000,
    upgradePriceIncrement: 1.25,
  },
  {
    incrementPerSecond: 2000,
    name: "Other",
    level: 0,
    requiredLevel: 50,
    price: 250000,
    upgradePriceIncrement: 1.3,
  },
];
