export enum TextVariant {
  SMALL = "small",
  DEFAULT = "default",
  LARGE = "large",
}

export enum TextColor {
  LIGHT = "light",
  DEFAULT = "default",
}

export interface TextProps {
  as?: keyof HTMLElementTagNameMap;
  color?: TextColor;
  variant?: TextVariant;
  className?: string;
}

export type StyledTextProps = Required<Pick<TextProps, "as" | "color" | "variant">>;
