import styled from "styled-components";

type ButtonVariants = "primary" | "secondary";

interface TitleProps {
  variant: ButtonVariants;
}

export const Title = styled.header<TitleProps>`
  color: ${({ theme, variant }) => (variant === "primary" ? theme.colors.primary : theme.colors.secondary)};
  font-size: 38px;
  text-align: center;
  padding-top: 30px;
`;
