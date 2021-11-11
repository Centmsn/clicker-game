export interface SkillEmblemProps {
  onClick: () => void;
  isDisabled?: boolean;
  price: number;
  level: number;
  name: string;
  desc: string;
  image: string;
}

export interface StyledLevelUpButtonProps {
  isDisabled: boolean;
  image: string;
}
