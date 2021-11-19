import React from "react";
import { css } from "styled-components";

export enum ButtonVariants {
  primary = "PRIMARY",
  secondary = "SECONDARY",
}

export interface ButtonProps {
  variant?: ButtonVariants;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export type StyledButtonProps = Pick<ButtonProps, "variant" | "isDisabled">;

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
