// RadarChart.jsx
import React from "react";
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const RadarChart = ({ data }) => {
  // Extract unique topics
  const topics = [...new Set(data.map((item) => item.topic))];

  // Calculate average intensity, likelihood, and relevance for each topic
  const radarData = topics.map((topic) => {
    const filteredData = data.filter((item) => item.topic === topic);
    const avgIntensity =
      filteredData.reduce((sum, item) => sum + item.intensity, 0) /
      filteredData.length;
    const avgLikelihood =
      filteredData.reduce((sum, item) => sum + item.likelihood, 0) /
      filteredData.length;
    const avgRelevance =
      filteredData.reduce((sum, item) => sum + item.relevance, 0) /
      filteredData.length;
    return {
      topic,
      intensity: avgIntensity,
      likelihood: avgLikelihood,
      relevance: avgRelevance,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsRadarChart outerRadius={150} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="topic" />
        <PolarRadiusAxis />
        <Radar
          name="Intensity"
          dataKey="intensity"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Likelihood"
          dataKey="likelihood"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Radar
          name="Relevance"
          dataKey="relevance"
          stroke="#ffc658"
          fill="#ffc658"
          fillOpacity={0.6}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
