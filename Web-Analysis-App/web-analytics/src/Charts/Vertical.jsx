import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: " Chart two ",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['BounceRates', 'ExitRates', 'PageValues',];

export const data = {
  labels,
  datasets: [
    {
      label: "BounceRates",
      data: [78, 58, 61, 71, 44, 58, 30],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "ExitRates",
      data: [78, 68, 61, 61, 44, 18, 30],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
    {
      label: "PageValues",
      data: [78, 28, 61, 11, 44, 58, 30],
      borderColor: "rgb(172, 119, 247)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      // yAxisID: "y2",
    },
  ],
};
const temp = labels.map(() =>faker.datatype.number({ min: 0, max: 100 }))
// console.log(temp);

export default function VerticalBar() {
  return (
    <div>
      <Line options={options} data={data} style={{ width: "500px" }} />
    </div>
  );
}
