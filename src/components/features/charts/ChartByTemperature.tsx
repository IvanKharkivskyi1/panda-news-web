import { useMemo } from 'react';

import ReactECharts from 'echarts-for-react';

import { useChartTheme } from '@/components';

import { Card } from '@/ui-components';

interface ChartByTemperatureProps {
  filteredCountries: Array<{
    temperature?: number;
  }>;
  title: string;
}

export const ChartByTemperature: React.FC<ChartByTemperatureProps> = ({
  filteredCountries,
  title,
}) => {
  const chartColor = useChartTheme('mint.800', 'mint.100');

  const temperatureCategories = ['Cold', 'Moderate', 'Hot'];

  const temperatureData = useMemo(() => {
    const result: Record<string, number> = { Cold: 0, Moderate: 0, Hot: 0 };

    filteredCountries.forEach(country => {
      const avgTemperature = country.temperature;
      if (avgTemperature === undefined) {
        return;
      }
      if (avgTemperature < 10) {
        result.Cold += 1;
      } else if (avgTemperature >= 10 && avgTemperature <= 25) {
        result.Moderate += 1;
      } else {
        result.Hot += 1;
      }
    });

    return result;
  }, [filteredCountries]);

  const chartData = useMemo(() => {
    const data = temperatureCategories.map(category => ({
      name: category,
      value: temperatureData[category],
    }));

    return {
      title: {
        text: title,
        subtext: 'Based on Average Temperatures',
        left: 'center',
        textStyle: {
          color: chartColor,
        },
        subtextStyle: {
          color: chartColor,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          color: chartColor,
        },
      },
      series: [
        {
          name: 'Temperature',
          type: 'pie',
          radius: '50%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }, [temperatureData, title, chartColor]);

  return (
    <Card>
      <ReactECharts option={chartData} />
    </Card>
  );
};
