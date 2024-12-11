import { Flex, useColorMode, useStyleConfig } from '@chakra-ui/react';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Calendar,
  Counter,
  Countries,
  Dashboard,
  FootballMatches,
  New,
} from '../../pages';
import { Navbar } from './Navbar/Navbar';

export const Router: React.FC = () => {
  const styles = useStyleConfig('main');
  const { colorMode } = useColorMode();

  return (
    <Flex flexDir="column" h="100vh" justifyContent="space-between">
      <Navbar />
      <Flex
        sx={styles}
        overflow="auto"
        p={4}
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/matches" element={<FootballMatches />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Flex>
      <Flex
        bg={colorMode === 'light' ? 'green.200' : 'mint.700'}
        p={4}
        justify="center"
      >
        footer
      </Flex>
    </Flex>
  );
};
