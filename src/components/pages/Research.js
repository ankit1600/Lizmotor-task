import React from "react";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

const Research = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      title: "EXTERNAL",
      subtittle: "External",
      text: "This is EXTERNAL section of Lizmotors",
    },
    {
      id: 2,
      title: "INTERNAL",
      subtittle: "Internal",
      text: "This is INTERNAL section of Lizmotors",
    },
  ];

  const handleClick = () => {
    navigate("/BusineessRelations");
  };

  return (
    <>
      <div className="research">
        <Card data={data} />
      </div>

      <button type="button" class="goto btn btn-primary" onClick={handleClick}>
        Goto Busineess Relations
      </button>
    </>
  );
};

export default Research;
