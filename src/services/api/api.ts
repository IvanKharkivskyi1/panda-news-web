import axios from 'axios';

import {
  type RawWeather,
  IncorrectCityNames,
  IncorrectCountryNames,
  REACT_APP_WEATHER_API_KEY,
  REACT_APP_WEATHER_URL,
} from '@/shared';

const axiosWithTimeout = axios.create({
  timeout: 10000,
});

const retryRequest = async <T>(
  request: () => Promise<T>,
  retries: number = 3
): Promise<T> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await request();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.warn(`Retrying request (${i + 1}/${retries})...`);
    }
  }
  throw new Error('All retries failed');
};

const cityNameMapping: Record<string, string> = IncorrectCityNames;

const normalizeCityName = (city: string): string =>
  city
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/'/g, '')
    .trim();

const getCityNameForApi = (city: string): string => {
  const normalizedCity = cityNameMapping[city] || normalizeCityName(city);

  if (!normalizedCity || normalizedCity === 'Unknown') {
    console.warn(`City "${city}" could not be normalized.`);
    return 'Unknown';
  }

  return normalizedCity;
};

const handleApiError = (
  error: unknown,
  original: string,
  normalized?: string
): void => {
  if (axios.isAxiosError(error)) {
    console.error(
      `Failed to fetch weather for "${original}"${
        normalized ? ` (normalized: "${normalized}")` : ''
      }: ${error.response?.data?.error?.message || error.message}`
    );
  } else if (error instanceof Error) {
    console.error(`Unexpected Error:`, error.message);
  } else {
    console.error(`Unexpected error occurred:`, error);
  }
};

const countryNameMap: Record<string, string> = IncorrectCountryNames;

export const fetchWeather = async (
  query: string | null
): Promise<RawWeather | null> => {
  if (!query || query.trim() === '' || query === 'Unknown') {
    console.warn(`Invalid query parameter: ${query}`);
    return null;
  }

  const transformedQuery = countryNameMap[query] || query;

  try {
    const response = await axios.get<RawWeather>(`${REACT_APP_WEATHER_URL}`, {
      params: {
        key: REACT_APP_WEATHER_API_KEY,
        q: transformedQuery,
      },
    });

    if (!response.data || !response.data.current) {
      console.warn(`Weather data not found for: ${transformedQuery}`);
      return null;
    }

    return response.data;
  } catch (error: unknown) {
    handleApiError(error, transformedQuery);
    return null;
  }
};

const invalidCityNames: Set<string> = new Set();

export const fetchWeatherWithTemperature = async (
  capital: string
): Promise<number | null> => {
  if (!capital || capital.trim() === '' || capital === 'Unknown') {
    invalidCityNames.add(capital || 'Unknown');
    console.warn(
      `City name is missing or invalid. Invalid cities so far: ${Array.from(
        invalidCityNames
      ).join(', ')}`
    );
    return null;
  }

  const normalizedCapital = getCityNameForApi(capital);

  try {
    const response = await retryRequest(() =>
      axiosWithTimeout.get(REACT_APP_WEATHER_URL, {
        params: {
          key: REACT_APP_WEATHER_API_KEY,
          q: normalizedCapital,
        },
      })
    );

    if (!response.data || !response.data.current) {
      console.warn(`Temperature data not found for: ${capital}`);
      return null;
    }

    return response.data.current.temp_c ?? null;
  } catch (error: unknown) {
    handleApiError(error, capital, normalizedCapital);
    return null;
  }
};
