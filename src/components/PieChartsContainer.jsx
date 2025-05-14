import React from "react";
import Legends from "./Legends";
import PieChart from "./PieChart";

function PieChartsContainer() {
  return (
    <div
      className=" d-grid"
      style={{
        grieTemplateRows: "1fr 1fr",
        gap: "3px",
        boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      {/* Pie Charts Row 1 */}
      <div
        className=" d-grid"
        style={{
          gridTemplateColumns: "3fr 7fr",
          gap: "3px",
        }}
      >
        {/* Pie Charts Legend */}
        <div className="">
          <Legends />
        </div>
        {/* Pie Chart 1 */}
        <div
          className=" d-grid"
          style={{
            gridTemplateRows: "4fr 1fr",
            gap: "3px",
          }}
        >
          <div className=" d-flex justify-content-start align-items-end">
            <PieChart title="Daily" />
          </div>
          <div className="">
            <h6
              className="text-start fw-semibold"
              style={{ fontSize: "14px", marginLeft: "60px" }}
            >
              Daily
            </h6>
          </div>
        </div>
      </div>
      {/* Pie Charts Row 2 */}
      <div
        className=" d-grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "3px",
        }}
      >
        {/* Pie Chart 2 */}
        <div
          className=" d-grid"
          style={{
            gridTemplateRows: "4fr 1fr",
            gap: "3px",
          }}
        >
          <div className=" d-flex justify-content-center align-items-center">
            <PieChart title="Current Month Cumulative" />
          </div>
          <div className="">
            <h6
              className="text-center fw-semibold"
              style={{ fontSize: "14px" }}
            >
              Current Month Cumulative
            </h6>
          </div>
        </div>
        {/* Pie Chart 3 */}
        <div
          className=" d-grid"
          style={{
            gridTemplateRows: "4fr 1fr",
            gap: "3px",
          }}
        >
          <div className=" d-flex justify-content-center align-items-center">
            <PieChart title="Till Date Cumulative" />
          </div>
          <div className=" ">
            <h6
              className="text-center fw-semibold"
              style={{ fontSize: "14px" }}
            >
              Till Date Cumulative
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChartsContainer;
