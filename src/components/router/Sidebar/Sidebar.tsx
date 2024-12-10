import { Flex } from '@chakra-ui/react';
import React from 'react';

type FeatureProps = {
  message: string;
};

export const Feature: React.FC<FeatureProps> = ({ message }) => {
  return (
    <Flex>
      {message}
    </Flex>
  );
};
