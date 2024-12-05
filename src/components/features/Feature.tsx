import React from 'react';
import { EmptyState } from '../placeholders/EmptyState';

type FeatureProps = {
  message: string;
};

export const Feature: React.FC<FeatureProps> = ({ message }) => {
  return (
    <div className="empty-state">
      <p>{message}</p>
      <EmptyState message={''} />
    </div>
  );
};