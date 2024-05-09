// TreeMap.jsx
import React from "react";
import {
  ResponsiveContainer,
  Treemap as RechartsTreemap,
  Tooltip,
} from "recharts";

const TreeMap = ({ data }) => {
  // Calculate event count by region
  const regionData = data.reduce((acc, curr) => {
    acc[curr.region] = (acc[curr.region] || 0) + 1;
    return acc;
  }, {});

  // Convert object to array of objects
  const treeMapData = Object.keys(regionData).map((region, index) => ({
    name: region,
    value: regionData[region],
    fill: `#${index}0000`, // Custom color for each region
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsTreemap
        data={treeMapData}
        dataKey="value"
        nameKey="name"
        fill="#8884d8"
        stroke="#fff"
      >
        <Tooltip />
      </RechartsTreemap>
    </ResponsiveContainer>
  );
};

export default TreeMap;
