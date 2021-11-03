export type UpgradeNames = "Weapon" | "Shield" | "Other";

export interface UpgradeBase {
  incrementPerSecond: number;
  price: number;
  upgradePriceIncrement: number;
  name: UpgradeNames;
  upgradeLevel: number;
  requiredHeroLevel: number;
}

export const UPGRADES_T_0: Array<UpgradeBase> = [
  {
    incrementPerSecond: 1,
    name: "Weapon",
    upgradeLevel: 0,
    requiredHeroLevel: 0,
    price: 100,
    upgradePriceIncrement: 1.05,
  },
  {
    incrementPerSecond: 25,
    name: "Shield",
    upgradeLevel: 0,
    requiredHeroLevel: 10,
    price: 2500,
    upgradePriceIncrement: 1.1,
  },
  {
    incrementPerSecond: 100,
    name: "Other",
    upgradeLevel: 0,
    requiredHeroLevel: 20,
    price: 15000,
    upgradePriceIncrement: 1.2,
  },
  {
    incrementPerSecond: 500,
    name: "Other",
    upgradeLevel: 0,
    requiredHeroLevel: 30,
    price: 75000,
    upgradePriceIncrement: 1.25,
  },
  {
    incrementPerSecond: 2000,
    name: "Other",
    upgradeLevel: 0,
    requiredHeroLevel: 50,
    price: 250000,
    upgradePriceIncrement: 1.3,
  },
];
