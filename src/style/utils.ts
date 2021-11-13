export const fadeOut = (rgb: string, opacity: number) => {
  const rgbCode = rgb.match(/\(\d{1,3},\s*\d{1,3},\s*\d{1,3}/gi);

  if (rgbCode) {
    return `rgba${rgbCode}, ${opacity})`;
  }

  return rgb;
};
