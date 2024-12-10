import type { Weather } from '@/shared/types/weatherTypes';
import { useEffect, useState } from 'react';
import { fetchWeather } from '../services/api/api';

export const useFetchWeather = (capital: string) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (capital) {
      fetchWeather(capital)
        .then(data => {
          if (data) {
            setWeather(data as Weather);
          } else {
            setError('No weather data available.');
          }
        })
        .catch(() => setError('Failed to fetch weather data.'));
    } else {
      setError('No capital available.');
    }
  }, [capital]);

  return { weather, error };
};
