import React from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

function Footer() {
  return (
    <div
      className=" d-grid"
      style={{
        gridTemplateColumns: "1fr 1fr",
        gap: "7px",
      }}
    >
      {/* Bar Chart */}
      <div
        className="d-grid  border border-2 border-secondary rounded"
        style={{
          gridTemplateRows: "1fr 6fr",
          boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
          backgroundColor: "#d1ffe2",
        }}
      >
        {/* Bar Chart Heading */}
        <div
          className="#007a92 text-center border border-2 rounded text-light fs-6 fw-semibold"
          style={{
            backgroundColor: "#1a9167",
            letterSpacing: "2px",
            padding: "2px 0px",
          }}
        >
          Solar Generation Curve
        </div>
        {/* Bar Chart */}
        <div className="">
          <BarChart />
        </div>
      </div>
      {/* Area Chart */}
      <div
        className="d-grid border border-2 border-secondary rounded"
        style={{
          gridTemplateRows: "1fr 6fr",
          backgroundColor: "#d1ffe2",
        }}
      >
        {/* Area Chart Heading */}
        <div
          className="#007a92 text-center border border-2 rounded text-light fs-6 fw-semibold"
          style={{
            backgroundColor: "#1a9167",
            letterSpacing: "2px",
            padding: "2px 0px",
          }}
        >
          Day Load Curve
        </div>
        {/* Area Chart */}
        <div className="">
          <AreaChart />
        </div>
      </div>
    </div>
  );
}

export default Footer;
