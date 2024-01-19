import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      // text: "Page comparison",
    },
  },
};

const labels = ["Administrative", "Informational", "ProductRelated"];

export const data = {
  labels,
  datasets: [
    {
      label: "true",
      // data: labels.map(() => {
      //   console.log(faker.datatype.number({ min: 0, max: 310000 }), "mov");
      //   return faker.datatype.number({ min: 0, max: 310000 });
      // }),
      data: [6475, 1500, 91985],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "false",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 310000 })),
      data: [22071, 4709, 299264],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function BarChart() {
  return (
    <div>
      <h1 style={{ color: "black" }}>Page comparison</h1>
      <Bar
        className="BarChart"
        options={options}
        data={data}
        style={{ width: "500px" }}
      />
    </div>
  );
}



// import React from "react";
// import { Bar } from "react-chartjs-2";
// import faker from "faker";

// const labels = ["Administrative", "Informational", "ProductRelated"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "true",
//       data: [6475, 1500, 91985],
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "false",
//       data: [22071, 4709, 299264],
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

// export const options = {
//   responsive: true,
//   indexAxis: 'y', // set the axis to 'y' for horizontal bar chart
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Page comparison",
//     },
//   },
//   scales: {
//     x: {
//       beginAtZero: true,
//     },
//   },
// };

// export default function BarChart() {
//   return (
//     <div>
//       <h2 style={{ color: "black" }}>Page comparison</h2>
//       <Bar
//         className="BarChart"
//         options={options}
//         data={data}
//         style={{ width: "500px" }}
//       />
//     </div>
//   );
// }

