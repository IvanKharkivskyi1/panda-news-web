import { fetchWeather } from '@/services';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface WeatherInfoProps {
  countryName?: string;
  countryCode?: string;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  countryName,
  countryCode,
}) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  const [conditionText, setConditionText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = countryCode || countryName;
    if (!query) return;

    const getWeather = async () => {
      try {
        const weatherData = await fetchWeather(query);
        if (weatherData) {
          setTemperature(weatherData.current.temp_c);
          setWeatherIcon(weatherData.current.condition.icon);
          setConditionText(weatherData.current.condition.text);
        }
      } catch (err) {
        setError('Failed to fetch weather data.');
        console.error(err);
      }
    };

    getWeather();
  }, [countryName, countryCode]);

  return (
    <Flex alignItems="center">
      {error ? (
        <Text color="red.500">{error}</Text>
      ) : temperature !== null ? (
        <>
          <Image
            src={weatherIcon || ''}
            alt={conditionText || 'Weather condition'}
            width="30px"
            height="30px"
          />
          <Text ml={2}>
            {conditionText}: {temperature}°C
          </Text>
        </>
      ) : (
        <Text>Loading weather data...</Text>
      )}
    </Flex>
  );
};
