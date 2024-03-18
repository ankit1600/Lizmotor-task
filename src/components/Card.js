import React from "react";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="card m-4 text-bg-light" style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.subtittle}
            </h6>
            <p className="card-text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
