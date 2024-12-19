import { Card as ChakraCard } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export const Card = (props: { children: ReactNode }) => {
  const { children } = props;

  return <ChakraCard p={4}>{children}</ChakraCard>;
};
