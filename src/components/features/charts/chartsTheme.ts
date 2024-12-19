import { useColorMode, useTheme } from '@chakra-ui/react';

/**
 * @param lightColor
 * @param darkColor
 * @returns depends on theme
 */
export const useChartTheme = (lightColor: string, darkColor: string) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const isDarkTheme = colorMode === 'dark';

  const color = isDarkTheme
    ? theme.colors[darkColor]
    : theme.colors[lightColor];

  return color;
};
