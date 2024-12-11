import { Flex, Skeleton, VStack } from '@chakra-ui/react';
import React from 'react';
import { usePagination } from '../../../hooks';
import { type Country } from '../../../shared';
import { EmptyState } from '../../placeholders';
import { CountryCard } from './CountryCard';
import { CountryPaginate } from './CountryPaginate';

type CountriesListProps = {
  countries: Country[];
  isLoading: boolean;
};

export const CountriesList: React.FC<CountriesListProps> = ({
  countries,
  isLoading,
}) => {
  const ITEMS_PER_PAGE = 10;

  const { paginatedItems, handlePageClick } = usePagination(
    countries,
    ITEMS_PER_PAGE
  );

  if (isLoading) {
    return (
      <VStack spacing={4}>
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </VStack>
    );
  }

  if (countries.length === 0) {
    return (
      <EmptyState message="No countries found. Try adjusting your search or filters." />
    );
  }

  return (
    <>
      <CountryPaginate
        pageCount={Math.ceil(countries.length / ITEMS_PER_PAGE)}
        onPageChange={({ selected }) => handlePageClick(selected)}
      />
      <Flex wrap="wrap" gap={4}>
        {paginatedItems.map(country => (
          <CountryCard
            key={country.code}
            name={country.name}
            capital={country.capital || 'No capital available'}
            continent={country.continent || 'Unknown'}
            flag={country.flags.png}
          />
        ))}
      </Flex>
      <CountryPaginate
        pageCount={Math.ceil(countries.length / ITEMS_PER_PAGE)}
        onPageChange={({ selected }) => handlePageClick(selected)}
      />
    </>
  );
};
