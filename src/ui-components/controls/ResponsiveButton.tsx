import {
  Button as ChakraButton,
  IconButton as ChakraIconButton,
  type ButtonProps,
  type IconButtonProps,
} from '@chakra-ui/react';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import type { JSX } from 'react/jsx-runtime';

import { useIsMobile } from '@/hooks';
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

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

type ExtendedIconButtonProps = IconButtonProps & {
  isAnimating?: boolean;
  href?: string;
  target?: string;
};

export const IconButton = (props: ExtendedIconButtonProps) => {
  const { isAnimating, ...rest } = props;
  const isMobile = useIsMobile();

  return (
    <ChakraIconButton
      size={isMobile ? 'xs' : 'md'}
      {...rest}
      animation={
        isAnimating ? `${pulseAnimation} 2s ease-in-out infinite` : undefined
      }
    />
  );
};
