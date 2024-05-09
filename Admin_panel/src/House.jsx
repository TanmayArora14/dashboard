// import React from "react";
// import {
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsFillBellFill,
// } from "react-icons/bs";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";

// function House() {
//   const data = [
//     {
//       name: "Page A",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: "Page B",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: "Page C",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: "Page D",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: "Page E",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: "Page F",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: "Page G",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

//   return (
//     <main className="main-container">
//       <div className="main-title">
//         <h3>DASHBOARD</h3>
//       </div>

//       <div className="main-cards">
//         <div className="card">
//           <div className="card-inner">
//             <h3>PRODUCTS</h3>
//             <BsFillArchiveFill className="card_icon" />
//           </div>
//           <h1>300</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>CATEGORIES</h3>
//             <BsFillGrid3X3GapFill className="card_icon" />
//           </div>
//           <h1>12</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>CUSTOMERS</h3>
//             <BsPeopleFill className="card_icon" />
//           </div>
//           <h1>33</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>ALERTS</h3>
//             <BsFillBellFill className="card_icon" />
//           </div>
//           <h1>42</h1>
//         </div>
//       </div>

//       <div className="charts">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="pv" fill="#8884d8" />
//             <Bar dataKey="uv" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>

//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="pv"
//               stroke="#8884d8"
//               activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </main>
//   );
// }

// export default House;

// House.jsx
// House.jsx
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart"; // Import BarChart component
import RadarChart from "./RadarChart"; // Import RadarChart component
import ScatterPlot from "./ScatterPlot"; // Import ScatterPlot component
import PieChart from "./PieChart"; // Import PieChart component
import TreeMap from "./TreeMap"; // Import TreeMap component

function House() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/dashboard");
      const jsonData = await response.json();
      // Extract the first 20 entries
      const slicedData = jsonData.slice(0, 20);
      setData(slicedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="main-container">
      <div className="chart-container">
        <h2>Intensity of Events by Year</h2>
        <BarChart data={data} />
      </div>
      <div className="chart-container">
        <h2>
          Radar Chart: Distribution of Intensity, Likelihood, and Relevance by
          Topic
        </h2>
        <RadarChart data={data} />
      </div>
      <div className="chart-container">
        <h2>
          Scatter Plot: Relationship between Intensity and Likelihood across
          Regions
        </h2>
        <ScatterPlot data={data} />
      </div>
      <div className="chart-container">
        <h2>Pie Chart: Distribution of Events by Country</h2>
        <PieChart data={data} />
      </div>
      <div className="chart-container">
        <h2>Tree Map: Distribution of Events by Region</h2>
        <TreeMap data={data} />
      </div>
    </main>
  );
}

export default House;
