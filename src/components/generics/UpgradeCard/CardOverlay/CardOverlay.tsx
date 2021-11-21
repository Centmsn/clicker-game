import Button from "components/generics/Button";
import { CardOverlayProps } from "./constants";
import { ButtonVariants } from "components/generics/Button/constants";
import coin from "assets/Additional_Assets/coinSpin.gif";
import * as P from "./parts";

const CardOverlay = ({ heroPrice, isBuyButtonDisabled, buyHero }: CardOverlayProps): JSX.Element => {
  return (
    <P.CardOverlay>
      <Button variant={ButtonVariants.secondary} onClick={buyHero} isDisabled={isBuyButtonDisabled}>
        Buy hero for {heroPrice} <img src={coin} alt="" />
      </Button>
    </P.CardOverlay>
  );
};

export default CardOverlay;
