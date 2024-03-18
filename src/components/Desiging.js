import React from "react";
import Card from "./Card";

const Desiging = () => {
  const data = [
    {
      id: 1,
      title: "SOFTWARE",
      subtittle: "Software",
      text: "This is SOFTWARE section of Lizmotors",
    },
    {
      id: 2,
      title: "HARDWARE",
      subtittle: "Hardware",
      text: "This is HARDWARE section of Lizmotors",
    },
  ];
  return (
    <div className="desiging">
      <Card data={data} />
    </div>
  );
};

export default Desiging;
