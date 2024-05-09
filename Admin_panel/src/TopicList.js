// TopicList.js

import React, { useEffect, useState } from "react";

function TopicList() {
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/dashboard?topic=oil"
        );
        if (response.ok) {
          const data = await response.json();
          setTopicData(data);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTopicData();
  }, []);

  return (
    <div>
      <h1>Topics with only Oil</h1>
      <ul>
        {topicData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
