import { useColorMode } from '@chakra-ui/react';
import { IconButton } from '../../ui-components/controls/ResponsiveButton';
import { MoonIcon, SunIcon } from '../../ui-components/icons/icons';

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
