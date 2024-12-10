import { useEffect, useState } from 'react';

import { fetchWeatherWithTemperature } from '../../src/services/api/api';
import type { Country } from '@/shared/types/countryTypes';

const batchPromises = async <T, R>(
  items: T[],
  batchSize: number,
  handler: (item: T) => Promise<R>
): Promise<R[]> => {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(handler));
    results.push(...batchResults);
  }
  return results;
};

export const useEnrichedCountries = (countries: Country[]) => {
  const [enrichedCountries, setEnrichedCountries] = useState<
    (Country & { temperature?: number })[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const enrichCountries = async () => {
      setIsLoading(true);
      try {
        const validCountries = countries.filter(country => country.capital);

        const enriched = await batchPromises<
          Country,
          Country & { temperature?: number }
        >(validCountries, 5, async country => {
          const temperature = await fetchWeatherWithTemperature(
            country.capital?.[0] || 'Unknown'
          );

          return { ...country, temperature: temperature ?? undefined };
        });
        setEnrichedCountries(enriched);
      } catch (error) {
        console.error('Error enriching countries:', error);
      } finally {
        setIsLoading(false);
      }
    };

    enrichCountries();
  }, [countries]);

  return { enrichedCountries, isLoading };
};
