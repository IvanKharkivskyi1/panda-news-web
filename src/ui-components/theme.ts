import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        fontFamily: 'body',
        color: props.colorMode === 'light' ? 'customGreen.800' : 'white',
        bg: props.colorMode === 'light' ? 'customGreen.200' : 'customGreen.900',
        lineHeight: 'base',
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
    main: {
      baseStyle: {
        w: 'full',
        maxW: '1200px',
        mx: 'auto',
        flexGrow: 1,
        bg: 'customGreen.100',
        color: 'mint.800',
        _dark: {
          bg: 'mint.900',
          color: 'white',
        },
      },
    },
  },
});

export default customTheme;
