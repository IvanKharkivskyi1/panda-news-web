import { Flex, Icon, IconButton, Link, useStyleConfig } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ThemeSwitcher } from '../../../components';
import { NavLink } from './NavLink';

export const Navbar = () => {
  const navStyles = useStyleConfig('nav');
  const headerStyles = useStyleConfig('header');

  const styles = {
    ...navStyles,
    p: 4,
    gap: 4,
  };

  return (
    <Flex as="header" sx={headerStyles}>
      <Flex as="nav" sx={styles} justifyContent="space-between">
        <Flex gap={2}>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/matches">Football Matches</NavLink>
          <NavLink to="/new">News</NavLink>
        </Flex>
        <Flex gap={2}>
          <ThemeSwitcher />
          <IconButton
            as={Link}
            aria-label={'data-testid-github'}
            colorScheme="green"
            icon={<Icon as={FaGithub} />}
            href="https://github.com/IvanKharkivskyi1/panda-news"
            target="_blank"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
