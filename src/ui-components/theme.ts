import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const sharedStyles = {
  w: 'full',
  maxW: '1200px',
  mx: 'auto',
};

export const customTheme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'light' ? 'customGreen.200' : 'mint.800',
      },
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        background: props.colorMode === 'light' ? 'green.200' : 'mint.600',
        borderRadius: '5px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: props.colorMode === 'light' ? 'green.300' : 'mint.700',
      },
      '::-webkit-scrollbar-track': {
        background:
          props.colorMode === 'light' ? 'customGreen.200' : 'mint.800',
      },
    }),
  },
  colors: {
    mint: {
      50: '#e3f9e5',
      100: '#c1f7c1',
      200: '#98ff98',
      300: '#66e766',
      400: '#33d433',
      500: '#00b300',
      600: '#008000',
      700: '#006400',
      800: '#004d00',
      900: '#003300',
    },
    customGreen: {
      50: '#F0FFF4',
      100: '#E8F8E0',
      200: '#E0FFE0',
      300: '#DFFFD6',
      400: '#D4FCD6',
      500: '#CCFFCC',
      600: '#E0F7E0',
      700: '#DFF2D8',
      800: '#C9F9C8',
      900: '#C9F9C8',
    },
  },
  components: {
    nav: {
      baseStyle: {
        ...sharedStyles,
      },
    },
    main: {
      baseStyle: {
        ...sharedStyles,
        flexGrow: 1,
        _dark: {
          bg: 'mint.900',
          color: 'white',
        },
      },
    },
    header: {
      baseStyle: {
        bg: 'green.200',
        _dark: {
          bg: 'mint.700',
          color: 'white',
        },
      },
    },
  },
});
