import { useEffect, useState } from 'react';

import {
  Box,
  Card,
  Container,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';

import {
  ChartByLetter,
  ChartByTemperature,
  DateWidget,
  FilterDropdown,
} from '@/components';
import { useCountriesQuery, useCountryFilters } from '@/hooks';
import { Continents } from '@/shared';

export const Dashboard = () => {
  const continentOptions = Object.values(Continents);
  const { countries } = useCountriesQuery();
  const { handleFilter, filteredCountries } = useCountryFilters(countries);
  const [boundingBox, setBoundingBox] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const firstCountry = filteredCountries[0]?.maps;

  useEffect(() => {
    const fetchBoundingBox = async (relationUrl: string) => {
      const match = relationUrl.match(/relation\/(\d+)/);
      if (match) {
        const relationId = match[1];
        setLoading(true);
        try {
          const response = await fetch(
            `https://overpass-api.de/api/interpreter?data=[out:json];relation(${relationId});out bb;`
          );
          const data = await response.json();
          const { minlat, minlon, maxlat, maxlon } = data.elements[0].bounds;
          setBoundingBox(`${minlon},${minlat},${maxlon},${maxlat}`);
        } catch (error) {
          console.error('Error fetching bounding box:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (firstCountry?.openStreetMaps) {
      fetchBoundingBox(firstCountry.openStreetMaps);
    }
  }, [firstCountry]);

  return (
    <Box flexGrow={1}>
      <Container w="400px" mb={4}>
        <FilterDropdown
          options={continentOptions}
          onFilter={handleFilter}
          label="Filter by Region"
        />
      </Container>
      <SimpleGrid columns={2} spacing={4}>
        <DateWidget initialDate="2024-12-19" />
        <ChartByLetter filteredCountries={filteredCountries} />
        <ChartByTemperature
          filteredCountries={filteredCountries}
          title="Temperature Distribution"
        />

        {/* Render OpenStreetMap preview */}
        {firstCountry && boundingBox && (
          <Card>
            <Text fontSize="lg" mb={4}>
              Map Preview for the First Filtered Country:
            </Text>
            {loading ? (
              <Spinner />
            ) : (
              <Box>
                <Box
                  as="iframe"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${boundingBox}&layer=mapnik`}
                  width="100%"
                  height="300px"
                  border="0"
                  allowFullScreen
                  loading="lazy"
                />
              </Box>
            )}
          </Card>
        )}
      </SimpleGrid>
    </Box>
  );
};
