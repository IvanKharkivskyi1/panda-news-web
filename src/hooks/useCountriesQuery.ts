import type { Country } from '@/shared/types/countryTypes';
import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../services/api/api';

/**
 * Custom hook to fetch countries data.
 * @returns {object} Query result with countries data and query state.
 */
export const useCountriesQuery = () => {
  return useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });
};
