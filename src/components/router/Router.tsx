import { Flex, useStyleConfig } from '@chakra-ui/react';
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

  return (
    <Flex flexDir="column" h="100vh" justifyContent="space-between">
      <Navbar />
      <Flex sx={styles} bg="mint.100" overflow="auto" p={4}>
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
      <Flex bg="mint.800">footer</Flex>
    </Flex>
  );
};
