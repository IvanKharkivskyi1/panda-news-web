import { Box, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { WeatherInfo } from '../../../components';

type CountryCardProps = {
  name: {
    common: string;
    official: string;
  };
  capital: string[] | null;
  continent: string;
  flag: string | null;
};

export const CountryCard: React.FC<CountryCardProps> = ({
  name,
  capital,
  continent,
  flag,
}) => {
  const capitalCity = capital?.[0] || null;

  return (
    <Card p={4}>
      <Box>
        <Heading size="sm" mb={2}>
          {name.common}
        </Heading>
        <Flex>
          {flag ? (
            <Image src={flag} alt={`${name.common} flag`} maxW="40px" />
          ) : (
            <Text>No flag available</Text>
          )}
        </Flex>
      </Box>
      <Text>Capital: {capitalCity || 'No capital available'}</Text>
      <Text>Continent: {continent}</Text>
      {capitalCity ? (
        <WeatherInfo capital={capitalCity} />
      ) : (
        <Text>No weather information available.</Text>
      )}
    </Card>
  );
};
