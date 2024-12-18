import { IconButton, MoonIcon, SunIcon } from '@/ui-components';
import { useColorMode } from '@chakra-ui/react';

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      colorScheme="green"
    />
  );
};
