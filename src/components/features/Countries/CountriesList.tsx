import { Grid, Skeleton, VStack } from '@chakra-ui/react';
import React from 'react';
import { usePagination } from '../../../hooks';
import { PAGINATION, type Country } from '../../../shared';
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
  const { ITEMS_PER_PAGE } = PAGINATION;

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
    <VStack w="full" py={4}>
      <CountryPaginate
        pageCount={Math.ceil(countries.length / ITEMS_PER_PAGE)}
        onPageChange={({ selected }) => handlePageClick(selected)}
      />
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
        w="full"
      >
        {paginatedItems.map(country => (
          <CountryCard
            key={country.code || country.name.common}
            name={country.name}
            capital={country.capital || 'No capital available'}
            continent={country.continents?.[0] || 'Unknown'}
            flag={country.flags.png}
          />
        ))}
      </Grid>
      <CountryPaginate
        pageCount={Math.ceil(countries.length / ITEMS_PER_PAGE)}
        onPageChange={({ selected }) => handlePageClick(selected)}
      />
    </VStack>
  );
};
