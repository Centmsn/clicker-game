import Text from "components/generics/Text";
import { buttons } from "./constants";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { setUpgradesPerClick, walletUpgradesPerClickSelector } from "state";
import * as P from "./parts";

const AmountButtons = () => {
  const upgradesPerClick = useAppSelector(walletUpgradesPerClickSelector);
  const dispatch = useAppDispatch();

  const handleSetUpgradesPerClick = (amount: number) => {
    dispatch(setUpgradesPerClick(amount));
  };

  return (
    <P.Wrapper>
      <Text>Select amount of upgrades to buy per click</Text>

      <P.ButtonsWrapper>
        {buttons.map((button) => {
          //   Temporary fix - it will probably require additional props in Button component
          const isButtonActive = button.value === upgradesPerClick;

          return (
            <P.StyledButton
              onClick={() => handleSetUpgradesPerClick(button.value)}
              // Temporary fix - this probably requires additional property passed to the button element
              style={{ border: isButtonActive ? "2px solid black" : "none" }}
            >
              {button.label}
            </P.StyledButton>
          );
        })}
      </P.ButtonsWrapper>
    </P.Wrapper>
  );
};

export default AmountButtons;
