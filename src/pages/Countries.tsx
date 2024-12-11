import { Flex, HStack, Skeleton, Text, VStack } from '@chakra-ui/react';
import { CountriesList } from '../components/features/Countries/CountriesList';
import { FilterDropdown } from '../components/features/FilterDropdown';
import { SearchBar } from '../components/features/SearchBar';
import { SortDropdown } from '../components/features/SortDropdown';
import { EmptyState } from '../components/placeholders';
import { useCountriesQuery } from '../hooks/useCountriesQuery';
import { useCountryFilters } from '../hooks/useCountryFilters';

export const Countries = () => {
  const { countries, isLoading, isError, error } = useCountriesQuery();
  const { filteredCountries, handleSearch, handleFilter, handleSort } =
    useCountryFilters(countries);

  if (isLoading) {
    return (
      <Flex align="center" justify="center" h="100vh">
        <Skeleton height="50px" />
        <Text>Loading countries...</Text>
        <Skeleton height="50px" />
      </Flex>
    );
  }

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
    <VStack>
      <HStack w="full">
        <SearchBar onSearch={handleSearch} />
        <HStack flexShrink={0}>
          <FilterDropdown
            options={['Asia', 'Europe', 'Africa', 'Oceania', 'America']}
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
      <CountriesList countries={filteredCountries} isLoading={false} />
    </VStack>
  );
};
