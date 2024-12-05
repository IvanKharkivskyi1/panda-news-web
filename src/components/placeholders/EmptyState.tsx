import React from 'react';
import { Feature } from '../features';

type EmptyStateProps = {
  message: string;
};

export const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="empty-state">
      <p>{message}</p>
      <Feature message={''} />
    </div>
  );
};
