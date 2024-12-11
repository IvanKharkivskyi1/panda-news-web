import { Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { fetchWeather } from '../../services/api/api';

interface WeatherInfoProps {
  capital: string;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ capital }) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  const [conditionText, setConditionText] = useState<string | null>(null);

  useEffect(() => {
    if (!capital) return;

    const getWeather = async () => {
      const weatherData = await fetchWeather(capital);
      if (weatherData) {
        setTemperature(weatherData.current.temp_c);
        setWeatherIcon(weatherData.current.condition.icon);
        setConditionText(weatherData.current.condition.text);
      }
    };

    getWeather();
  }, [capital]);

  return (
    <Flex alignItems="center">
      {temperature !== null ? (
        <>
          <Image
            src={weatherIcon || ''}
            alt={conditionText || 'Weather condition'}
            width="30"
            height="30"
          />
          <Text>
            {conditionText}: {temperature}°C
          </Text>
        </>
      ) : (
        <Text>Weather data not available for {capital}</Text>
      )}
    </Flex>
  );
};
