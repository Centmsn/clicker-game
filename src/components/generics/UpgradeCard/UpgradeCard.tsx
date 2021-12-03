import { useCallback, useMemo, useState } from "react";
import SkillEmblem from "components/generics/SkillEmblem";
import Picture from "components/generics/Picture";
import Title from "components/generics/Title";
import CardOverlay from "./CardOverlay";
import { UpgradeBase } from "constants/Upgrades";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { increaseUpgradeLevel, increaseIncrement, removeFromWallet, increaseHeroLevel, walletSelector } from "state";
import { UpgradeCardProps } from "./constants";
import { calcUpgradePrice } from "./utils";
import arrow from "assets/Additional_Assets/levelUpArrow.png";
import pixelStar from "assets/Additional_Assets/retroStar.png";
import * as P from "./parts";

const UpgradeCard = ({
  name,
  id,
  heroLevel,
  price,
  incrementPerSecond,
  upgrades,
  portrait,
}: UpgradeCardProps): JSX.Element => {
  const [isCardExpanded, setIsCardExpanded] = useState(true);
  const { value: walletValue, upgradesPerClick } = useAppSelector(walletSelector);
  const dispatch = useAppDispatch();

  const handleBuyUpgrade = useCallback(
    (tier: number, upgrade: UpgradeBase, amount: number) => () => {
      const incrementValue = upgrade.incrementPerSecond * amount;
      const actionPayload = {
        heroId: id,
        amount,
        tier,
      };

      dispatch(removeFromWallet(upgrade.price));
      dispatch(increaseUpgradeLevel(actionPayload));
      dispatch(increaseIncrement(incrementValue));
    },
    [id, dispatch]
  );

  const handleBuyHeroLevel = () => {
    dispatch(removeFromWallet(price));
    dispatch(increaseHeroLevel({ amount: 1, heroId: id }));
    dispatch(increaseIncrement(incrementPerSecond));
  };

  const handleCardExpand = () => {
    setIsCardExpanded((prev) => !prev);
  };

  const renderSkillEmblems = useCallback(() => {
    return upgrades.map((upgrade, tier) => {
      const { availableUpgradesAmount, finalUpgradePrice } = calcUpgradePrice(
        upgrade.price,
        upgrade.upgradePriceIncrement,
        upgradesPerClick,
        walletValue
      );
      const isDisabled = finalUpgradePrice > walletValue;
      const updatedUpgradeObject = {
        ...upgrade,
        price: finalUpgradePrice,
      };

      return (
        <SkillEmblem
          onClick={handleBuyUpgrade(tier, updatedUpgradeObject, availableUpgradesAmount)}
          isDisabled={isDisabled}
          upgradeData={updatedUpgradeObject}
          key={tier}
        />
      );
    });
  }, [upgradesPerClick, upgrades, walletValue, handleBuyUpgrade]);

  const shouldRenderOverlay = heroLevel === 0;
  const isHeroLevelUpBtnDisabled = price > walletValue;
  const heroIncrementPerSecond = incrementPerSecond * heroLevel;

  return (
    <P.Card isExpanded={isCardExpanded}>
      {shouldRenderOverlay && (
        <CardOverlay heroPrice={price} isBuyButtonDisabled={isHeroLevelUpBtnDisabled} buyHero={handleBuyHeroLevel} />
      )}

      <P.HeroInfo>
        <Title variant="small">
          {name} {heroLevel}
        </Title>
        <P.Sup>level</P.Sup>
        <Picture src={pixelStar} alt="pixel-star" />
        <P.SubTitle> increments {heroIncrementPerSecond} gold /s </P.SubTitle>
      </P.HeroInfo>

      <P.HeroPortrait portrait={portrait} />

      <P.LevelUpButton onClick={handleBuyHeroLevel} isDisabled={price > walletValue}>
        levelUp <Picture src={arrow} alt="levepUp" />
      </P.LevelUpButton>

      <P.HeroPortrait portrait={portrait} />
      <P.HideButton onClick={handleCardExpand} />
      <P.UpgradesSkillsWrapper>{renderSkillEmblems()}</P.UpgradesSkillsWrapper>
    </P.Card>
  );
};

export default UpgradeCard;
