import { PropsWithChildren } from "react";
import { TextProps, TextVariant, TextColor } from "./constants";
import * as P from "./parts";

const Text = ({
  as = "p",
  color = TextColor.DEFAULT,
  variant = TextVariant.DEFAULT,
  children,
  className,
}: PropsWithChildren<TextProps>) => {
  return (
    <P.TextWrapper color={color} variant={variant} as={as} className={className}>
      {children}
    </P.TextWrapper>
  );
};

export default Text;
