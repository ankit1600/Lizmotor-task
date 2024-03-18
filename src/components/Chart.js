import React from "react";

const Chart = () => {
  return (
    <div class="chart">
      <div class="total total1">10000</div>
      <div class="bar">
        <div class="bar-label">Negative</div>
        <div class="bar-value" style={{ width: "calc(100 / 1333 * 100%)" }}>
          13451
        </div>
      </div>
      <div class="total total2">5000</div>
      <div class="bar">
        <div class="bar-label">Positive</div>
        <div
          class="bar-value"
          style={{ width: "calc( 15000000/ 13333 * 100%)" }}
        >
          11839
        </div>
      </div>
      <div class="total total3">0</div>
      <div class="bar">
        <div class="bar-label">Comments</div>
        <div
          class="bar-value"
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
