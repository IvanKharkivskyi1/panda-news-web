import { Flex, useStyleConfig } from '@chakra-ui/react';
import { ThemeSwitcher } from '../../../components';
import { NavLink } from './NavLink';

export const Navbar = () => {
  const baseStyles = useStyleConfig('main');

  const styles = {
    ...baseStyles,
    p: 4,
    borderRadius: 'md',
    bg: 'mint.900',
    gap: 4,
  };

  return (
    <Flex bg="mint.900">
      <Flex as="nav" sx={styles} justifyContent="space-between">
        <Flex>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/matches">Football Matches</NavLink>
          <NavLink to="/new">New</NavLink>
        </Flex>
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
};
