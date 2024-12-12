import { createContext, useContext } from 'react';
import { useCountriesQuery } from '../../../hooks/useCountriesQuery';
import type { Country } from '../../../shared';

interface CountriesContextValue {
  countries: Country[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const CountriesContext = createContext<CountriesContextValue | null>(null);

interface CountriesProviderProps {
  children: React.ReactNode;
}

export const CountriesProvider: React.FC<CountriesProviderProps> = ({
  children,
}) => {
  const { countries, isLoading, isError, error } = useCountriesQuery();

  return (
    <CountriesContext.Provider value={{ countries, isLoading, isError, error }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider');
  }
  return context;
};
