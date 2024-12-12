import { Skeleton } from '@chakra-ui/react';
import React from 'react';

export const CountryCardSkeleton: React.FC = () => {
  return (
    <div className="country-card">
      <Skeleton height={100} width="100%" />
    </div>
  );
};
