import type { Country } from '@/shared/types/countryTypes';
import { Flex, Skeleton, Text, useStyleConfig } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Calendar,
  Counter,
  Countries,
  Dashboard,
  FootballMatches,
  New,
} from '../../pages';
import { fetchCountries } from '../../services/api/api';
import { Navbar } from './Navbar/Navbar';

export const Router: React.FC = () => {
  const styles = useStyleConfig('main');

  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  if (isLoading)
    return (
      <Flex align="center" justify="center" h="100vh">
        <Skeleton height="50px" />
        <Text>Loading countries...</Text>
        <Skeleton height="50px" />
      </Flex>
    );

  if (isError) {
    console.error('Error fetching countries:', error);
    return <Text>Error: {(error as Error).message}</Text>;
  }

  if (!countries || countries.length === 0)
    return (
      <Flex align="center" justify="center" h="100vh">
        No countries available. Please try again later.
      </Flex>
    );

  return (
    <Flex flexDir="column" h="100vh" justifyContent="space-between">
      <Navbar />
      <Flex sx={styles} overflow="auto" p={4}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/countries"
            element={<Countries countries={countries} />}
          />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/matches" element={<FootballMatches />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Flex>
      <Flex bg="mint.800" p={4} justify="center">
        footer
      </Flex>
    </Flex>
  );
};
