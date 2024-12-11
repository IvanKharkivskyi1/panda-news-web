import type { Country } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../services/api/api';

export const useCountriesQuery = () => {
  const {
    data: countries = [],
    isLoading,
    isError,
    error,
  } = useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  return {
    countries,
    isLoading,
    isError,
    error,
  };
};
