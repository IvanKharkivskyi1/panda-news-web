import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, ...props }) => {
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      {...props}
      borderRadius="8px"
      p={2}
      bg="mint.100"
      color="MenuText"
      _hover={{ bg: 'green.400', textDecoration: 'none', color: 'mint.100' }}
    >
      {children}
    </ChakraLink>
  );
};
