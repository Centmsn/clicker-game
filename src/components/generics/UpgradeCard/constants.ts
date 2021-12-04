import { HeroBase } from "constants/Heroes";

export interface UpgradeCardProps extends HeroBase {}

export interface StyledHeroPortraitProps {
  portrait: string;
}

export interface StyledLevelUpBtn {
  isDisabled: boolean;
}

export interface CardProps {
  isExpanded?: boolean;
}

export interface DissapearingWrapperProps {
  isExpanded: boolean;
}
