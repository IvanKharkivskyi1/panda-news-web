import { useMemo } from 'react';

import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

import { Card } from '@/ui-components';

interface ChartByLetterProps {
  filteredCountries: Array<{
    name: { common: string };
  }>;
}

export const ChartByLetter: React.FC<ChartByLetterProps> = ({
  filteredCountries,
}) => {
  const groupedData = useMemo(() => {
    const result: Record<string, number> = {};

    filteredCountries.forEach(country => {
      const firstLetter = country.name.common.charAt(0).toUpperCase();
      result[firstLetter] = (result[firstLetter] || 0) + 1;
    });

    return result;
  }, [filteredCountries]);

  const chartData = useMemo(() => {
    const keys = Object.keys(groupedData).sort();
    const values = keys.map(key => groupedData[key]);

    return {
      xAxis: {
        type: 'category',
        data: keys,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: values,
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' },
            ]),
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' },
              ]),
            },
          },
        },
      ],
    };
  }, [groupedData]);

  return (
    <Card>
      <ReactECharts option={chartData} />
    </Card>
  );
};
