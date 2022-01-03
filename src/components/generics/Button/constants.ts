import React, { HTMLAttributes } from "react";
import { css } from "styled-components";

export enum ButtonVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export enum ButtonSizes {
  SMALL = "SMALL",
  LARGE = "LARGE",
}

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  isDisabled?: boolean;
  size: ButtonSizes;
  onClick: (e: React.MouseEvent) => void;
};

export const Sizes = {
  small: "80px",
  large: "200px",
};

export const Variants = {
  primary: css`
    font-size: 0.8rem;
    border-left: 6px solid ${({ theme }) => theme.colors.black};
    border-bottom: 6px solid ${({ theme }) => theme.colors.secondary};
    border-top: 6px solid ${({ theme }) => theme.colors.secondary};
    border-right: 6px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    font-size: 0.8rem;
    border-left: 6px solid ${({ theme }) => theme.colors.black};
    border-bottom: 6px solid ${({ theme }) => theme.colors.primaryDark};
    border-top: 6px solid ${({ theme }) => theme.colors.primaryDark};
    border-right: 6px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
};
export type ExtendedButtonProps = React.PropsWithChildren<ButtonProps & React.HTMLAttributes<HTMLButtonElement>>;

export type StyledButtonProps = Pick<ButtonProps, "variant" | "isDisabled" | "size">;
