import Button from "components/generics/Button";
import { CardOverlayProps } from "./constants";
import * as P from "./parts";
import coin from "assets/Additional_Assets/coinSpin.gif";

const CardOverlay = ({ heroPrice, isBuyButtonDisabled, buyHero }: CardOverlayProps): JSX.Element => {
  return (
    <P.CardOverlay>
      <Button onClick={buyHero} isDisabled={isBuyButtonDisabled}>
        Buy hero for {heroPrice} <img src={coin} alt="" />
      </Button>
    </P.CardOverlay>
  );
};

export default CardOverlay;
