export const isEmpty = (arg: Array<any> | Record<string, any>) => {
  if (Array.isArray(arg)) return arg.length === 0;

  return Object.keys(arg).length === 0;
};
