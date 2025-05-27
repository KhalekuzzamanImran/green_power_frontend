import React from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import EnergyConsumtionChart from "./EnergyConsumptionChart";
import SolarGenerationCurve from "./SolarGenerationCurve";
import DayLoadCurve from "./DayLoadCurve";

function Footer({ solarData }) {
  const temp = solarData?.map((entry) => [
    entry?.timestamp,
    entry?.power?.[0] + entry?.power?.[1] + entry?.power?.[2],
  ]);
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
          // backgroundColor: "#d1ffe2",
          backgroundColor: "rgb(209 255 226)",
        }}
      >
        {/* Bar Chart Heading */}
        <div
          className="#007a92 text-center border border-2 rounded text-light fs-6 fw-semibold"
          style={{
            backgroundColor: "#1c6748",
            letterSpacing: "2px",
            padding: "2px 0px",
          }}
        >
          Solar Generation Curve
        </div>
        {/* Bar Chart */}
        <div className="">
          {/* <BarChart data={temp} /> */}
          <SolarGenerationCurve data={temp} />
        </div>
      </div>
      {/* Area Chart */}
      <div
        className="d-grid border border-2 border-secondary rounded"
        style={{
          gridTemplateRows: "1fr 6fr",
          // backgroundColor: "#d1ffe2",
          backgroundColor: "rgb(209 255 226)",
        }}
      >
        {/* Area Chart Heading */}
        <div
          className="#007a92 text-center border border-2 rounded text-light fs-6 fw-semibold"
          style={{
            backgroundColor: "#1c6748",
            letterSpacing: "2px",
            padding: "2px 0px",
          }}
        >
          Day Load Curve
        </div>
        {/* Area Chart */}
        <div className="">
          {/* <EnergyConsumtionChart
            data={solarData?.map((entry) => [
              new Date(entry?.timestamp).getTime() + 6 * 60 * 60 * 1000, // Add 6 hours (in milliseconds)
              entry?.energy_consumption?.[0], // Extract the first energy consumption value
            ])}
          /> */}
          {/* <AreaChart data={temp} /> */}
          <DayLoadCurve data={temp} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
