import type { Country } from '@/shared/types/countryTypes';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import { CountryCard } from './CountryCard';
import { CountryPaginate } from './CountryPaginate';

type CountriesListProps = {
  countries: Country[];
  itemsPerPage?: number;
  isLoading: boolean;
};

export const CountriesList: React.FC<CountriesListProps> = ({
  countries,
  itemsPerPage = 10,
  isLoading,
}) => {
  const { paginatedItems, handlePageClick } = usePagination(
    countries,
    itemsPerPage
  );

  if (isLoading) {
    return <Text>Loading countries...</Text>;
  }

  return (
    <>
      <CountryPaginate
        pageCount={Math.ceil(countries.length / itemsPerPage)}
        onPageChange={({ selected }) => handlePageClick(selected)}
      />
      <Flex w="full" flexWrap="wrap" gap={4}>
        {paginatedItems.map(country => (
          <CountryCard
            key={country.code}
            name={country.name}
            capital={country.capital}
            continent={country.continent}
            flag={country.flags.png}
          />
        ))}
      </Flex>
    </>
  );
};
