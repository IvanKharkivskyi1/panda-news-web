import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import {
  CountriesList,
  EmptyState,
  FilterDropdown,
  SearchBar,
  SortDropdown,
} from '@/components';
import { useCountriesQuery, useCountryFilters } from '@/hooks';
import { Continents } from '@/shared';

export const Countries = () => {
  const { countries, isLoading, isError, error } = useCountriesQuery();
  const { filteredCountries, handleSearch, handleFilter, handleSort } =
    useCountryFilters(countries);

  const continentOptions = Object.values(Continents);

  if (isError) {
    return <Text>Error: {(error as Error).message}</Text>;
  }

  if (!countries || countries.length === 0) {
    return (
      <Flex align="center" justify="center" h="100vh">
        No countries available. Please try again later.
        <EmptyState message="empty state" />
      </Flex>
    );
  }

  return (
    <Box w="full">
      <HStack>
        <SearchBar onSearch={handleSearch} />
        <HStack flexShrink={0}>
          <FilterDropdown
            options={continentOptions}
            onFilter={handleFilter}
            label="Filter by Region"
          />
          <SortDropdown
            options={[
              { label: 'Name (A-Z)', value: 'name-asc' },
              { label: 'Name (Z-A)', value: 'name-desc' },
              { label: 'Temperature (Low-High)', value: 'temperature-asc' },
              { label: 'Temperature (High-Low)', value: 'temperature-desc' },
            ]}
            onSort={handleSort}
            label="Sort by:"
          />
        </HStack>
      </HStack>
      <CountriesList countries={filteredCountries} isLoading={isLoading} />
    </Box>
  );
};
