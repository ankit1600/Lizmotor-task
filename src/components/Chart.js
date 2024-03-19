import React from "react";

const Chart = () => {
  return (
    <div className="chart">
      <div className="total total1">10000</div>
      <div className="bar">
        <div className="bar-label">Negative</div>
        <div className="bar-value" style={{ width: "calc(100 / 1333 * 100%)" }}>
          13451
        </div>
      </div>
      <div className="total total2">5000</div>
      <div className="bar">
        <div className="bar-label">Positive</div>
        <div
          className="bar-value"
          style={{ width: "calc( 15000000/ 13333 * 100%)" }}
        >
          11839
        </div>
      </div>
      <div className="total total3">0</div>
      <div className="bar">
        <div className="bar-label">Comments</div>
        <div
          className="bar-value"
          style={{ width: "calc(50000000 / 13333 * 100%)" }}
        >
          1063
        </div>
      </div>
      <ul>
        <li>Total Reviwes</li>
        <li>Positive Reviews</li>
        <li>Negative Reviwes </li>
        <li>Comments</li>
      </ul>
    </div>
  );
};

export default Chart;
