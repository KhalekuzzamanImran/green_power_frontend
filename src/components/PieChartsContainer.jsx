import React from "react";
import Legends from "./Legends";
import PieChart from "./PieChart";
import TemporaryChart from "./TemporaryChart";

function PieChartsContainer({ data }) {
  return (
    <div
      className=" d-grid"
      style={{
        grieTemplateRows: "1fr 1fr",

        boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      {/* Pie Charts Row 1 */}
      <div
        className=" d-grid"
        style={{
          gridTemplateColumns: "2fr 4fr",
        }}
      >
        <div className="">
          {/* <TemporaryChart chartTitle="Daily" data={data?.[0].data} /> */}
        </div>
        <div
          className="d-grid"
          style={{
            gridTemplateRows: "4fr 1fr",
          }}
        >
          <div className=" d-flex justify-content-start">
            <TemporaryChart chartTitle="Daily" data={data?.[0].data} />
          </div>
          <div className="">
            <h6
              className="fw-semibold"
              style={{ fontSize: "14px", marginLeft: "60px", marginTop: "4px" }}
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
        }}
      >
        <div
          className="d-grid"
          style={{
            gridTemplateRows: "4fr 1fr",
          }}
        >
          <div className="">
            <TemporaryChart chartTitle="Daily" data={data?.[0].data} />
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
        <div
          className="d-grid"
          style={{
            gridTemplateRows: "4fr 1fr",
          }}
        >
          <div className="">
            <TemporaryChart chartTitle="Daily" data={data?.[0].data} />
          </div>
          <div className="">
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
