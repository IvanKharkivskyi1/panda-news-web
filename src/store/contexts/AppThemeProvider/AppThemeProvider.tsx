import { ChakraProvider } from '@chakra-ui/react';
import { createContext, ReactNode } from 'react';
import customTheme from '../../../ui-components/theme';

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={undefined}>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};
