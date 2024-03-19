import React from "react";
import Card from "../Card";

const Manufacturing = () => {
  const data = [
    {
      id: 1,
      title: "MATERIAL",
      subtittle: "Material",
      text: "This is MATERIAL section of Lizmotors",
    },
    {
      id: 2,
      title: "PRODUCTION",
      subtittle: "Production",
      text: "This is PRODUCTION section of Lizmotors",
    },
  ];
  return (
    <div className="manufacturing">
      <Card data={data} />
    </div>
  );
};

export default Manufacturing;
