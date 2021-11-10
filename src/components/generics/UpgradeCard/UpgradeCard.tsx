import SkillEmblem from "components/generics/SkillEmblem";
import CardOverlay from "./CardOverlay";
import { UpgradeBase } from "constants/Upgrades";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { increaseUpgradeLevel, increaseIncrement, removeFromWallet, increaseHeroLevel } from "state";
import { UpgradeCardProps } from "./constants";
import * as P from "./parts";
import arrow from "assets/Additional_Assets/levelUpArrow.png";
import pixelStar from "assets/Additional_Assets/retroStar.png";

const UpgradeCard = ({ hero }: UpgradeCardProps): JSX.Element => {
  const { name, id, heroLevel, price, incrementPerSecond, upgrades, portrait } = hero;
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

      return (
        <SkillEmblem
          onClick={handleBuyUpgrade(tier, upgrade)}
          isDisabled={isDisabled}
          price={upgrade.price}
          level={upgrade.upgradeLevel}
          key={tier}
        />
      );
    });
  };

  const shouldRenderOverlay = heroLevel === 0;
  const isHeroLevelUpBtnDisabled = price > walletValue;

  return (
    <P.Card>
      {shouldRenderOverlay && (
        <CardOverlay heroPrice={price} isBuyButtonDisabled={isHeroLevelUpBtnDisabled} buyHero={handleBuyHeroLevel} />
      )}

      <P.HeroInfo>
        <p>
          {name} {heroLevel}
          <sup>level</sup>
          <img src={pixelStar} alt="pixel star" />
        </p>
        <em>increment per second: {incrementPerSecond * heroLevel}/s</em>
      </P.HeroInfo>

      <P.HeroPortrait portrait={portrait} />

      <P.LevelUpButton onClick={handleBuyHeroLevel} isDisabled={price > walletValue}>
        levelUp <img src={arrow} alt="levepUp" />
      </P.LevelUpButton>

      <P.HeroPortrait portrait={portrait} />

      <P.UpgradesSkillsWrapper>{renderSkillEmblems()}</P.UpgradesSkillsWrapper>
    </P.Card>
  );
};

export default UpgradeCard;
