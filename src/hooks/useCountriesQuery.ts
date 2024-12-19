import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { REACT_APP_REST_COUNTRIES_URL, type Country } from '../shared';

export const useCountriesQuery = () => {
  const {
    data: countries = [],
    isLoading,
    isError,
    error,
  } = useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await axios.get<Country[]>(REACT_APP_REST_COUNTRIES_URL);

      if (response.status !== 200) {
        throw new Error(`Error fetching countries: ${response.statusText}`);
      }

      return response.data;
    },
  });

  return {
    countries,
    isLoading,
    isError,
    error,
  };
};
