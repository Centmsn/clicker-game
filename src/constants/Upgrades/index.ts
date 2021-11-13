import woodenSword from "assets/Temporary_Assets/woodenSword.png";
import woodenShield from "assets/Weapon_Singles/Wooden/Wooden_Shield3.png";
import crimsonStaff from "assets/Weapon_Singles/Crimson/Crimson_Weapon27.png";
import fatefulCrown from "assets/Armor_Singles/Fateful/Fateful_Helmet10.png";
import goldChestplate from "assets/Armor_Singles/Gold/Gold_Chestplate14.png";

export interface UpgradeBase {
  incrementPerSecond: number;
  price: number;
  upgradePriceIncrement: number;
  name: string;
  upgradeLevel: number;
  requiredHeroLevel: number;
  desc: string;
  image: string;
}

export const UPGRADES_T_0: Array<UpgradeBase> = [
  {
    incrementPerSecond: 1,
    name: "Sword Mastery",
    upgradeLevel: 0,
    requiredHeroLevel: 0,
    price: 100,
    upgradePriceIncrement: 1.05,
    desc: "Your sword skills increase your income by 1",
    image: woodenSword,
  },
  {
    incrementPerSecond: 25,
    name: "Guard",
    upgradeLevel: 0,
    requiredHeroLevel: 10,
    price: 2500,
    upgradePriceIncrement: 1.1,
    desc: "Your shield skills increase your income by 25",
    image: woodenShield,
  },
  {
    incrementPerSecond: 100,
    name: "Rocket Science",
    upgradeLevel: 0,
    requiredHeroLevel: 20,
    price: 15000,
    upgradePriceIncrement: 1.2,
    desc: "Your science skills increase your income by 100",
    image: crimsonStaff,
  },
  {
    incrementPerSecond: 500,
    name: "Rocket Science",
    upgradeLevel: 0,
    requiredHeroLevel: 30,
    price: 75000,
    upgradePriceIncrement: 1.25,
    desc: "Your science skills increase your income by 500",
    image: fatefulCrown,
  },
  {
    incrementPerSecond: 2000,
    name: "Rocket Science",
    upgradeLevel: 0,
    requiredHeroLevel: 50,
    price: 250000,
    upgradePriceIncrement: 1.3,
    desc: "Your science skills increase your income by 2000",
    image: goldChestplate,
  },
];
