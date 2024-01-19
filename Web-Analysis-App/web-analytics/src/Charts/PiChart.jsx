// import React from 'react'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// function ChartOne() {

//     ChartJS.register(ArcElement, Tooltip, Legend);
//      const data = {
//       labels: ['Feb(0.15%)','March(10.06%)','May(19.12%)','June(1.51%)','July(3.45%)','Aug(3.98%)','Sep(4.50%)','Oct(6.02%)','Nov(39.83%)','Dec(11.32%)'],
//       datasets: [
//         {
//           label: '%',
//           // data: [3, 192, 365, 29, 66, 76,98,86,115,760,216],
//           data:[0.15,10.06,19.12,1.51,3.45,3.98,4.50,6.02,39.83,11.32],
//           backgroundColor: [
//             '#7FB3D5',
//             '#A3D6A6',
//             '#FFD56B',
//             '#FFAB89',
//             '#FFE680',
//             '#99C2FF',
//             '#FF99B4',
//             '#D98AFF',
//             '#B3B3FF',
//             '#7FB3D5'

//           ],
//           borderColor: [
//             '#8c8c8c'
//           ],
//           // Text:[
//           //   'jan',
//           //   'feb',
//           //   'march',
//           //   'april',
//           //   'may',
//           // ],
//           borderWidth: 1,
//         },
//       ],
//     };

//     const options = {
//         maintainAspectRatio: false, // This property allows you to set your own aspect ratio.
//         responsive: true,
//       };

//   return (
//     <div className='donut' >
//     <h2 className='first-graph'>Month vs Revenue</h2>
//       <Doughnut className='chart-one'  options={options} data={data}/>
//     </div>
//   )
// }

// export default ChartOne

import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, elements } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function ChartOne() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [clickedData, setClickedData] = useState({ label: "", value: 0 });

  const data = {
    labels: [
      "Feb(0.15%)",
      "March(10.06%)",
      "May(19.12%)",
      "June(1.51%)",
      "July(3.45%)",
      "Aug(3.98%)",
      "Sep(4.50%)",
      "Oct(6.02%)",
      "Nov(39.83%)",
      "Dec(11.32%)",
    ],
    datasets: [
      {
        label: "%",
        data: [0.15, 10.06, 19.12, 1.51, 3.45, 3.98, 4.5, 6.02, 39.83, 11.32],
        backgroundColor: [
          "#7FB3D5",
          "#A3D6A6",
          "#FFD56B",
          "#FFAB89",
          "#FFE680",
          "#99C2FF",
          "#FF99B4",
          "#D98AFF",
          "#B3B3FF",
          "#7FB3D5",
        ],
        borderColor: ["#8c8c8c"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    onClick: (event, elements) => handleChartClick(elements),
  };    
  const handleChartClick = (elements) => {
    if (elements.length > 0) {
      const clickedElement = elements[0];  
      if (clickedElement.index !== undefined) {
        const { index } = clickedElement;
        if (data && data.datasets && data.datasets.length > 0) {
          const { label, data: chartData } = data.datasets[0];
          if (chartData && chartData.length > index) {
            // Set the clicked data to state
            setClickedData({ label, value: chartData[index] });
          }
        }
      }
    }
  };
  
  
  return (
    <div className="donut">
      <div className="tile">
        <div className="tile-content">
          <p style={{color:'black'}}>Monthly Revenue :{clickedData?.value}% </p>
          <p>YearlyConversionRate(Revenue) : 15.5 % </p>
        </div>
      </div>
      <h2 className="first-graph">Month vs Revenue</h2>
      <Doughnut className="chart-one" options={options} data={data} />
    </div>
  );
}

export default ChartOne;
