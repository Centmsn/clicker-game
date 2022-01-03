export const calcPrice = (price: number, increment: number, amount: number): number => {
  if (amount === 0) return Math.round(price);
  const newPrice = price * increment;

  return calcPrice(newPrice, increment, amount - 1);
};

export const calcPriceForMultipleItems = (
  price: number,
  increment: number,
  amount: number,
  accumulatedPrice: number = 0
): number => {
  if (amount === 0) {
    return Math.round(accumulatedPrice);
  }

  const nextLevelPrice = price * increment;
  const newAccumulatedPrice = accumulatedPrice + nextLevelPrice;

  return calcPriceForMultipleItems(nextLevelPrice, increment, amount - 1, newAccumulatedPrice);
};

export const calcPriceAndAmount = (
  price: number,
  increment: number,
  walletValue: number,
  amount: number = 0,
  accumulatedPrice: number = 0
): { price: number; amount: number } => {
  const nextLevelPrice = price * increment;
  const newAccumulatedPrice = nextLevelPrice + accumulatedPrice;
  const hasEnoughGoldForNextUpgrade = walletValue - newAccumulatedPrice >= 0;

  if (!hasEnoughGoldForNextUpgrade) {
    const roundedPrice = Math.round(accumulatedPrice || nextLevelPrice);
    const maxAmount = amount || 1;

    return {
      price: roundedPrice,
      amount: maxAmount,
    };
  }

  return calcPriceAndAmount(nextLevelPrice, increment, walletValue, amount + 1, newAccumulatedPrice);
};
