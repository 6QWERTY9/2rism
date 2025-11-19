export const getAssetPath = (relativePath: string): string => {
  // import.meta.env.BASE_URL автоматически определит базовый путь (/ или /2rism/)
  return `${import.meta.env.BASE_URL}${relativePath.startsWith('/') ? relativePath.substring(1) : relativePath}`;
};