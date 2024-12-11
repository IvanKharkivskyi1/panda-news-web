import type { Country } from '@/shared/types/countryTypes';
import { useState } from 'react';
import { useEnrichedCountries } from '../hooks/useEnrichedCountries';
import { useFilteredCountries } from '../hooks/useFilteredCountries';

export const useCountryFilters = (countries: Country[]) => {
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

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handleFilter = (region: string) => {
    setSelectedRegion(region || null);
  };

  const handleSort = (key: string, direction: 'asc' | 'desc') => {
    setSortKey(key);
    setSortDirection(direction);
  };

  return {
    filteredCountries,
    handleSearch,
    handleFilter,
    handleSort,
  };
};
