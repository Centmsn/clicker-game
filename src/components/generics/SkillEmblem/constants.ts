import { UpgradeBase } from "constants/Upgrades";

export interface SkillEmblemProps {
  onClick: () => void;
  isDisabled?: boolean;
  upgradeData: UpgradeBase;
}

export interface StyledLevelUpButtonProps {
  isDisabled: boolean;
  image: string;
}
