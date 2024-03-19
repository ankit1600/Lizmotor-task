import React from "react";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

const BusineessRelations = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      title: "B2C",
      subtittle: "B2c",
      text: "This is B2C section of Lizmotors",
    },
    {
      id: 2,
      title: "B2B",
      subtittle: "B2b",
      text: "This is B2B section of Lizmotors",
    },
  ];
  const handleClick = () => {
    navigate("/Statistics");
  };

  return (
    <>
      <div className="busineessrelations">
        <Card data={data} />
      </div>
      <button type="button" class="goto btn btn-primary" onClick={handleClick}>
        Goto Statistics
      </button>
    </>
  );
};

export default BusineessRelations;
