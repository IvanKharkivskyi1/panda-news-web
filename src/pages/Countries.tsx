import type { Country } from '@/shared/types/countryTypes';
import { HStack, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { CountriesList } from '../components/features/Countries/CountriesList';
import { FilterDropdown } from '../components/features/FilterDropdown';
import { SearchBar } from '../components/features/SearchBar';
import { SortDropdown } from '../components/features/SortDropdown';
import { useEnrichedCountries } from '../hooks/useEnrichedCountries';
import { useFilteredCountries } from '../hooks/useFilteredCountries';

export const Countries = ({ countries }: { countries: Country[] }) => {
  const [query, setQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const { enrichedCountries } = useEnrichedCountries(countries);
  const filteredCountries = useFilteredCountries(
    enrichedCountries,
    query,
    selectedRegion,
    sortKey,
    sortDirection
  );

  const handleSort = (key: string, direction: 'asc' | 'desc') => {
    setSortKey(key);
    setSortDirection(direction);
  };
  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handleFilter = (region: string) => {
    setSelectedRegion(region || null);
  };

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
