export const validateAmount = (amount: number, min: number = 0, max: number = Infinity) => {
  if (amount > max || amount < min) {
    throw new Error(`Provided value ${amount} is out of range (${min} - ${max}`);
  }

  return true;
};
