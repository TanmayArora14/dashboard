// SunburstChart.jsx
import React from "react";
import { Sunburst } from "react-minimal-pie-chart";

const SunburstChart = ({ data }) => {
  // Prepare data for Sunburst chart
  const sunburstData = data.map((entry) => ({
    title: `${entry.country} - ${entry.region} - ${entry.city}`,
    value: entry.intensity + entry.likelihood + entry.relevance,
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.7)`, // Random color for each segment
    children: entry.years.map((year) => ({
      title: year,
      value: entry.intensity + entry.likelihood + entry.relevance,
    })),
  }));

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Sunburst
        data={sunburstData}
        animate
        animationDuration={300}
        animationEasing="ease-out"
        cx="50%"
        cy="50%"
        lineWidth={1}
        paddingAngle={0.3}
        radius={150}
        startAngle={0}
        viewBoxSize={[400, 400]}
      />
    </div>
  );
};

export default SunburstChart;
