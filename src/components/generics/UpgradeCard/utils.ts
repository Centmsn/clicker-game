import { calcPriceForMultipleItems, calcPriceAndAmount } from "utils/calcPrice";

export function calcUpgradePrice(initialPrice: number, increment: number, amount: number, walletValue: number) {
  const finalResult = {
    availableUpgradesAmount: 0,
    finalUpgradePrice: 0,
  };

  if (!amount) {
    const { amount, price } = calcPriceAndAmount(initialPrice, increment, walletValue);
    finalResult.availableUpgradesAmount = amount;
    finalResult.finalUpgradePrice = price;
  } else {
    const price = calcPriceForMultipleItems(initialPrice, increment, amount);
    finalResult.finalUpgradePrice = price;
    finalResult.availableUpgradesAmount = amount;
  }

  return finalResult;
}
