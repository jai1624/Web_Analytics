import React from 'react';

const monthData = {
  "Nov": 39.83,
  "May": 19.12,
  "Dec": 11.32,
  "Mar": 10.06,
  "Oct": 6.02,
  "Sep": 4.50,
  "Aug": 3.98,
  "Jul": 3.45,
  "June": 1.51,
  "Feb": 0.15
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const MonthList = () => {
  return (
    <ul>
      {Object.entries(monthData).map(([month, value], index) => (
        <li key={month} style={{ color: COLORS[index % COLORS.length] }}>
          {month}: {value}
        </li>
      ))}
    </ul>
  );
};

export default MonthList;
