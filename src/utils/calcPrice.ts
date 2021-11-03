export const calcPrice = (price: number, increment: number, amount: number): number => {
  if (amount === 0) return price;

  return calcPrice(price * increment, increment, amount - 1);
};
