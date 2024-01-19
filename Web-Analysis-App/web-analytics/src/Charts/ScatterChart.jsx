import React from 'react';
import { Scatter } from 'react-chartjs-2';
import chartvalues from './scaterChartValues';


const data = {
  datasets: [
    {
      label: 'Revenue vs Bounce Rates',
      data: Object.keys(chartvalues.BounceRates).map((key) => ({
        y: chartvalues.BounceRates[key],
        x: chartvalues.Revenue[key],
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjust the color as needed
    },
    {
      label: 'Revenue vs Exit Rates',
      data: Object.keys(chartvalues.ExitRates).map((key) => ({
        y: chartvalues.ExitRates[key],
        x: chartvalues.Revenue[key],
      })),
      backgroundColor: 'rgba(54, 162, 235, 0.6)', // Adjust the color as needed
    },
    {
      label: 'Revenue vs Page Values',
      data: Object.keys(chartvalues.PageValues).map((key) => ({
        y: chartvalues.PageValues[key],
        x: chartvalues.Revenue[key],
      })),
      backgroundColor: 'rgba(255, 206, 86, 0.6)', // Adjust the color as needed
    },
  ],
};
console.log(Object.keys(chartvalues.BounceRates).map((key) => ({
    y: chartvalues.BounceRates[key],
    x: chartvalues.Revenue[key],
  })));
const options = {
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'Revenue',
      },
    },
    y: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Bounce Rates, Exit Rates, Page Values',

      },
    },
  },
};

const ScaterChart = () => {
  return (
    <div className="Scatter">
      <h1 style={{color:'black',fontSize:'29px'}}>Session comparison</h1>
      <Scatter className='ScatterChart' data={data} options={options} />
    </div>
  );
};

export default ScaterChart ;

