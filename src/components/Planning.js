// Planning.js
import React from "react";
import Card from "./Card";

const Planning = () => {
  const data = [
    {
      id: 1,
      title: "PRD",
      subtittle: "Prd",
      text: "This is PRD section of Lizmotors",
    },
    {
      id: 2,
      title: "SPECS",
      subtittle: "Specs",
      text: "This is SPECS section of Lizmotors",
    },
  ];

  return (
    <div className="planning">
      <Card data={data} />
    </div>
  );
};

export default Planning;
