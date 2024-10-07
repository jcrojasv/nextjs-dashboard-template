'use client';
import React from 'react';
import { Chart } from 'react-google-charts';


// const data = [
//     ['Category', 'Line 1', 'Line 2', 'Column 1', 'Column 2', 'Column 3'],
//     ['A', 10, 20, 30, 40, 50],
//     ['B', 15, 25, 35, 45, 55],
//     ['C', 20, 30, 40, 50, 60],
//     ['D', 25, 35, 45, 55, 65],
//     ['E', 30, 40, 50, 60, 70]
//   ];

//   const options = {
//     seriesType: 'bars',
//     series: {
//     0: { type: 'line' },
//     1: { type: 'line' },
//     2: { type: 'bars', targetAxisIndex: 1, isStacked: true },
//     3: { type: 'bars', targetAxisIndex: 1, isStacked: true },
//     4: { type: 'bars', targetAxisIndex: 1, isStacked: false }
//   },
//     vAxes: {
//       0: { title: 'Lines' },
//       1: { title: 'Columns' }
//     },
//     hAxis: { title: 'Category' },
//     colors: ['#e2431e', '#6f9654', '#1c91c0', '#f1ca3a', '#43459d'],
//     isStacked: true
//   };

const data = [
    ['Categorías', 'Serie 1', 'Serie 2', 'Serie 3', 'Line 1', 'Line 2', 'Column 1'],
    ['A', 6, 6, 10, 10, 20, 23],
    ['B', 7, 7, 11, 15, 27, 29],
    ['C', 0, 0, 0, 20, 33, 32], // Valores "0" para la columna C
    ['D', 9, 9, 15, 25, 39, 35],
    ['E', 10, 10, 20, 30, 45, 40],
  ];

  const options = {
    title: 'Gráfico Combinado',
    legend: { position: 'bottom' },
    series: {
      0: { type: 'bars', color: '#81b6e8' }, // Serie 1 (barra)
      1: { type: 'bars', color: '#c2dd7f' }, // Serie 2 (barra)
      2: { type: 'bars', color: '#ffc107' }, // Serie 3 (barra)
      3: { type: 'line', color: '#f44336' }, // Line 1 (línea)
      4: { type: 'line', color: '#9ccc65' }, // Line 2 (línea)
      5: { type: 'line', color: '#2196f3', visibleInLegend: true }, // Column 1 (línea)
    },
    vAxis: {
      format: 'decimal',
    },
    hAxis: {
      title: 'Categorías',
    },
    seriesType: 'bars', // Tipo predeterminado
  };

const GoogleChart: React.FC = () => {
  return (
    <Chart
      chartType="comboChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
    />
  );
};

export default GoogleChart;