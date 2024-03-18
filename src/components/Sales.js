import React from "react";
import Card from "./Card";

const Sales = () => {
  const data = [
    {
      id: 1,
      title: "ONLINE",
      subtittle: "Online",
      text: "This is ONLINE section of Lizmotors",
    },
    {
      id: 2,
      title: "DEALEARSHIP",
      subtittle: "Dealearship",
      text: "This is DEALEARSHIP section of Lizmotors",
    },
  ];
  return (
    <div className="sales">
      <Card data={data} />
    </div>
  );
};

export default Sales;
