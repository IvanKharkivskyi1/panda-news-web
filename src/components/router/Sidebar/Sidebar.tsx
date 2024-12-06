import React from 'react';

type FeatureProps = {
  message: string;
};

export const Feature: React.FC<FeatureProps> = ({ message }) => {
  return (
    <div className="empty-state">
      <p>{message}</p>
    </div>
  );
};
