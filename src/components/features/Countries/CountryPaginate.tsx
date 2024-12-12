import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import ReactPaginate from 'react-paginate';

type CountryPaginateProps = {
  pageCount: number;
  onPageChange: (event: { selected: number }) => void;
};

export const CountryPaginate: React.FC<CountryPaginateProps> = ({
  pageCount,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      previousLabel={
        <Button size="sm" colorScheme="green" leftIcon={<ArrowBackIcon />}>
          Previous
        </Button>
      }
      nextLabel={
        <Button size="sm" colorScheme="green" rightIcon={<ArrowForwardIcon />}>
          Next
        </Button>
      }
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="pagination-container"
      activeClassName="active"
      pageClassName="pagination-page"
      previousClassName="pagination-previous"
      nextClassName="pagination-next"
      disabledClassName="pagination-disabled"
      breakClassName="pagination-break"
    />
  );
};
