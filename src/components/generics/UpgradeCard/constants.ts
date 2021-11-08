import { HeroBase } from "constants/Heroes";

export interface UpgradeCardProps {
  hero: HeroBase;
}

export interface StyledHeroPortraitProps {
  portrait: string;
}

export interface StyledLevelUpBtn {
  isDisabled: boolean;
}
