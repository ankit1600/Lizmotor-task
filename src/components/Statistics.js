import React, { useState } from "react";
import Card from "./Card";
import Chart from "./Chart";

const Statistics = () => {
  const [showChart, setShowChart] = useState(false);
  const data = [
    {
      id: 1,
      title: "ONLINE",
      subtittle: "Online",
      text: "This is ONLINE section of Lizmotors",
    },
    {
      id: 2,
      title: "INTERVIEW",
      subtittle: "Interview",
      text: "This is INTERVIEW section of Lizmotors",
    },
    {
      id: 3,
      title: "PUBLIC DATA",
      subtittle: "Public Data",
      text: "This is PUBLIC DATA section of Lizmotors",
    },
    {
      id: 4,
      title: "HEALTH",
      subtittle: "Health",
      text: "This is HEALTH section of Lizmotors",
    },
  ];

  return (
    <>
      <div className="statistics z-1">
        <Card data={data} />
      </div>
      {showChart && (
        <div className="z-2 reviwes">
          <Chart />
        </div>
      )}
      <span
        className="gotoReviwes"
        onMouseEnter={() => setShowChart(true)}
        onMouseLeave={() => setShowChart(false)}
      >
        Reviwes
      </span>
    </>
  );
};

export default Statistics;
