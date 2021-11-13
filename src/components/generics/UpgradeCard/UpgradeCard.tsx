import { useState } from "react";
import SkillEmblem from "components/generics/SkillEmblem";
import Picture from "components/generics/Picture";
import Title from "components/generics/Title";
import CardOverlay from "./CardOverlay";
import { UpgradeBase } from "constants/Upgrades";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { increaseUpgradeLevel, increaseIncrement, removeFromWallet, increaseHeroLevel } from "state";
import { UpgradeCardProps } from "./constants";
import arrow from "assets/Additional_Assets/levelUpArrow.png";
import pixelStar from "assets/Additional_Assets/retroStar.png";
import * as P from "./parts";

const UpgradeCard = ({ hero }: UpgradeCardProps): JSX.Element => {
  const [isCardExpanded, setIsCardExpanded] = useState(true);

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
          name={upgrade.name}
          key={tier}
          desc={upgrade.desc}
          image={upgrade.image}
        />
      );
    });
  };

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

      <P.HideButton onClick={() => setIsCardExpanded((prev) => !prev)} />

      <P.UpgradesSkillsWrapper>{renderSkillEmblems()}</P.UpgradesSkillsWrapper>
    </P.Card>
  );
};

export default UpgradeCard;
