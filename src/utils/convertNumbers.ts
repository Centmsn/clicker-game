export const convertNumToReadableString = (num: number) => {
  if (num >= 1e15) return `${(num / 1e15).toFixed()} K`;
  if (num >= 1e12) return `${(num / 1e12).toFixed()} T`;
  if (num >= 1e9) return `${(num / 1e9).toFixed()} B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed()} M`;
  if (num >= 1000) return `${(num / 1000).toFixed()} k`;
  return num.toString();
};
