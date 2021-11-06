import SkillEmblem from "components/generics/SkillEmblem";
import { UpgradeBase } from "constants/Upgrades";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { increaseUpgradeLevel, increaseIncrement, removeFromWallet, increaseHeroLevel } from "state";
import { UpgradeCardProps } from "./constants";
import * as P from "./parts";

const UpgradeCard = ({ name, id, heroLevel, price, incrementPerSecond, upgrades }: UpgradeCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const walletValue = useAppSelector((state) => state.wallet.value);

  const handleBuyUpgrade = (tier: number, upgrade: UpgradeBase) => () => {
    const actionPayload = {
      heroId: id,
      amount: 1,
      tier,
    };

    dispatch(removeFromWallet(upgrade.price));
    dispatch(increaseUpgradeLevel(actionPayload));
    dispatch(increaseIncrement(upgrade.incrementPerSecond));
  };

  const handleBuyHeroLevel = () => {
    dispatch(removeFromWallet(price));
    dispatch(increaseHeroLevel({ amount: 1, heroId: id }));
    dispatch(increaseIncrement(incrementPerSecond));
  };

  const renderSkillEmblems = () => {
    return upgrades.map((upgrade, tier) => {
      const isDisabled = upgrade.price > walletValue;

      return <SkillEmblem onClick={handleBuyUpgrade(tier, upgrade)} isDisabled={isDisabled} key={tier} />;
    });
  };

  return (
    <P.Card>
      <P.HeroInfo>
        {name} level {heroLevel}
      </P.HeroInfo>

      <P.HeroPortrait />

      <P.LevelUpSection>
        levelUp{" "}
        <P.LevelUpButton onClick={handleBuyHeroLevel} isDisabled={price > walletValue}>
          🆙
        </P.LevelUpButton>{" "}
        cost: {price} 🪙
      </P.LevelUpSection>

      <P.UpgradesSkillsWrapper>{renderSkillEmblems()}</P.UpgradesSkillsWrapper>
    </P.Card>
  );
};

export default UpgradeCard;
