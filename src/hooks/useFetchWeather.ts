import type { Weather } from '@/shared';
import { useEffect, useState } from 'react';
import { fetchWeather } from '@/services';

export const useFetchWeather = (capital: string) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!capital) {
      setError('No capital available.');
      return;
    }

    fetchWeather(capital)
      .then(data => {
        if (data) {
          setWeather(data as Weather);
        } else {
          setError('No weather data available.');
        }
      })
      .catch(() => setError('Failed to fetch weather data.'));
  }, [capital]);

  return { weather, error };
};
