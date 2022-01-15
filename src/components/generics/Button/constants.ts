import React, { HTMLAttributes } from "react";
import closeIcon from "assets/Additional_Assets/closeIcon.png";
import { css } from "styled-components";

export enum ButtonVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  CLOSE = "CLOSE",
  CONFIRM = "CONFIRM",
}

export enum ButtonSizes {
  TINY = "TINY",
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
  close: css`
    font-size: 0.8rem;
    position: absolute;
    top: ${({ theme }) => theme.styles.margins.tiny};
    right: ${({ theme }) => theme.styles.margins.tiny};
    width: ${({ theme }) => theme.styles.width.tiny};
    height: ${({ theme }) => theme.styles.height.tiny};
    color: ${({ theme }) => theme.colors.black};
    background: center/contain url(${closeIcon}) no-repeat;
    transition: ${({ theme }) => theme.styles.transitions.fast};

    &:hover {
      transform: rotate(180deg);

      cursor: pointer;
    }
  `,
  confirm: css`
    border: ${({ theme }) => theme.styles.border.solid_black_normal};
    padding: ${({ theme }) => theme.styles.paddings.small};
    cursor: pointer;
    text-transform: uppercase;
    margin: ${({ theme }) => theme.styles.margins.small};
  `,
};
export type ExtendedButtonProps = React.PropsWithChildren<ButtonProps & React.HTMLAttributes<HTMLButtonElement>>;

export type StyledButtonProps = Pick<ButtonProps, "variant" | "isDisabled" | "size">;
