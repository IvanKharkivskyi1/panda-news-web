import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'body', // Використовуємо шрифт з теми
        color: 'gray.800', // Колір тексту
        bg: 'lightgreen', // Фоновий колір
        lineHeight: 'base', // Міжрядковий інтервал
      },
    },
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
  },
  components: {
    main: {
      baseStyle: {
        w: 'full',
        maxW: '1200px',
        mx: 'auto',
        flexGrow: 1,
      },
    },
  },
});

export default customTheme;
