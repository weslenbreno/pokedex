import React from 'react';
import Chart from 'react-apexcharts';

const chartOptions = (chartTitle: string) => ({
  colors: ['#8BBE8A', '#EA5D60', '#58ABF6', '#EB4971', '#78A8C0', '#F0D8A8'],
  chart: {
    type: 'bar',
  },
  title: {
    text: chartTitle,
    floating: true,
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      colors: ['#fff'],
    },
    formatter: function (val, opt) {
      return val;
    },
    offsetX: 0,
    dropShadow: {
      enabled: true,
    },
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
  },
  xaxis: {
    categories: ['HP', 'Ataque', 'Defesa', 'Ataque Especial', 'Defesa Especial', 'Velocidade'],
    labels: {
      show: false,
    },
  },
  grid: {
    row: {
      colors: ['#e5e5e5', 'transparent'],
      opacity: 0.5,
    },

    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
});

type StatsChartProps = {
  data: any[];
  pokemonName: string;
};

const StatsChart: React.FC<StatsChartProps> = ({ data, pokemonName }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Chart options={chartOptions(pokemonName)} series={data} type="bar" height={350} />
    </div>
  );
};

export default StatsChart;
