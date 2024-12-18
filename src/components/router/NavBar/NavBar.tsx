import { AuthModal, NavLink, ThemeSwitcher } from '@/components';
import { IconButton, TooltipHover } from '@/ui-components';
import { Flex, Icon, useStyleConfig } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const NavBar = () => {
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
          <NavLink to="/profile">Profile</NavLink>
        </Flex>
        <Flex gap={2}>
          <AuthModal />
          <ThemeSwitcher />
          <TooltipHover label="Welcome to my GitHup repo">
            <IconButton
              as="a"
              aria-label="data-testid-github"
              colorScheme="green"
              icon={<Icon as={FaGithub} />}
              href="https://github.com/IvanKharkivskyi1/panda-news"
              target="_blank"
              isAnimating
            />
          </TooltipHover>
        </Flex>
      </Flex>
    </Flex>
  );
};
