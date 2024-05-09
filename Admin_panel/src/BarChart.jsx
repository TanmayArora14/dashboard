// BarChart.jsx
import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ data }) => {
  // Process data to get intensity by country and region
  const intensityByCountryRegion = data.reduce((acc, curr) => {
    const { country, region, intensity } = curr;
    const key = `${country}-${region}`;
    acc[key] = (acc[key] || 0) + intensity; // Aggregate intensity by country and region
    return acc;
  }, {});

  const chartData = Object.keys(intensityByCountryRegion).map((key) => {
    const [country, region] = key.split("-");
    return {
      country,
      region,
      intensity: intensityByCountryRegion[key],
    };
  });

  // Render bar chart
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsBarChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="intensity" fill="#8884d8" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
