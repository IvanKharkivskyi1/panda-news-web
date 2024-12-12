import {
  Button as ChakraButton,
  IconButton as ChakraIconButton,
  type ButtonProps,
  type IconButtonProps,
} from '@chakra-ui/react';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import type { JSX } from 'react/jsx-runtime';

import {} from '@chakra-ui/react';
import { useIsMobile } from '../../hooks';

export const Button = (
  props: JSX.IntrinsicAttributes &
    Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      keyof ButtonProps
    > & { htmlTranslate?: 'yes' | 'no' | undefined } & ButtonProps & {
      as?: 'button' | undefined;
    }
) => {
  const isMobile = useIsMobile();
  return (
    <ChakraButton size={isMobile ? 'xs' : 'lg'} {...props}>
      {props.children}
    </ChakraButton>
  );
};

export const IconButton = (
  props: JSX.IntrinsicAttributes &
    Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      keyof IconButtonProps
    > &
    IconButtonProps & {
      as?: 'button';
    }
) => {
  const isMobile = useIsMobile();
  return <ChakraIconButton size={isMobile ? 'xs' : 'lg'} {...props} />;
};
