import { HeroBase } from "constants/Heroes";

export interface UpgradeCardProps extends HeroBase {}

export interface HeroProps {
  portrait: string;
}

export interface StyledLevelUpBtn {
  isDisabled: boolean;
}
