import axios from 'axios';

import type { Country, RawCountry } from '../../shared/';
import {
  REST_COUNTRIES_URL,
  WEATHER_API_KEY,
  WEATHER_URL,
} from '../../shared/';

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
export interface RawWeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
export const fetchWeather = async (
  capital: string | null
): Promise<RawWeatherData | null> => {
  if (!capital || capital === 'Unknown') {
    console.warn(`Invalid city name: ${capital}`);
    return null;
  }

  try {
    const response = await axios.get<RawWeatherData>(`${WEATHER_URL}`, {
      params: {
        key: WEATHER_API_KEY,
        q: capital,
      },
    });

    return response.data;
  } catch (error: unknown) {
    handleApiError(error, capital);
    return null;
  }
};

const cityNameMapping: Record<string, string> = {
  Naypyidaw: 'Nay Pyi Taw',
  Ngerulmud: 'Melekeok',
  Fakaofo: 'Tokelau',
  "Nuku'alofa": 'Tongatapu',
  Yaoundé: 'Yaounde',
  "Sana'a": 'Sanaa',
};

const normalizeCityName = (city: string): string =>
  city
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/'/g, '')
    .trim();

const getCityNameForApi = (city: string): string =>
  cityNameMapping[city] || normalizeCityName(city);

export const fetchWeatherWithTemperature = async (
  capital: string
): Promise<number | null> => {
  if (!capital || capital.trim() === '') {
    console.warn('City name is missing or invalid.');
    return null;
  }

  const normalizedCapital = getCityNameForApi(capital);

  try {
    const response = await retryRequest(() =>
      axiosWithTimeout.get(WEATHER_URL, {
        params: {
          key: WEATHER_API_KEY,
          q: normalizedCapital,
        },
      })
    );
    return response.data?.current?.temp_c ?? null;
  } catch (error: unknown) {
    handleApiError(error, capital, normalizedCapital);
    return null;
  }
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
      }`,
      error.response?.data?.error?.message || error.message
    );
  } else if (error instanceof Error) {
    console.error(`Unexpected Error:`, error.message);
  } else {
    console.error(`Unexpected error occurred:`, error);
  }
};

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await axios.get<RawCountry[]>(REST_COUNTRIES_URL);

  if (response.status !== 200) {
    throw new Error(`Error fetching countries: ${response.statusText}`);
  }

  return response.data.map(country => ({
    name: {
      common: country.name.common,
      official: country.name.official,
    },
    capital: country.capital || [],
    region: country.region || 'Unknown',
    population: country.population || 0,
    flags: {
      png: country.flags?.png || '',
      svg: country.flags?.svg || '',
    },
    code: country.cca2 || '',
    continent: country.continents?.[0] || 'Unknown',
    languages: country.languages ? Object.values(country.languages) : [],
    currency: country.currencies
      ? Object.keys(country.currencies)
          .map(key => country.currencies?.[key]?.name || 'Unknown')
          .join(', ')
      : 'Unknown',
  }));
};
