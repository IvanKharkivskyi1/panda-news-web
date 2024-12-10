import { Button, ButtonProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavButtonProps extends ButtonProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavButtonProps> = ({
  to,
  children,
  ...props
}) => {
  return (
    <Button as={RouterLink} to={to} colorScheme="green" {...props}>
      {children}
    </Button>
  );
};
