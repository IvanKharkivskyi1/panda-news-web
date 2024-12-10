import { useState } from 'react';

export const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = items.slice(offset, offset + itemsPerPage);

  return { paginatedItems, handlePageClick };
};
