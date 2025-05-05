import React from "react";
import PieChart from "./PieChart";

export default function PieChartsContainer() {
  return (
    <>
      <div className="bg-primary row gx-0" style={{ height: "48%" }}>
        <div className="col-5 bg-danger">
          <PieChart isShowLegend={true} />
        </div>
        <div className="col bg-secondary"></div>
        <div className="col-6 bg-success">
          <PieChart isShowLegend={false} />
          <h6 className="text-center">Daily</h6>
        </div>
      </div>
      <div className="bg-primary row" style={{ height: "52%" }}>
        <div className="col-6 bg-primary">
          <PieChart isShowLegend={false} />
          <h6 className="text-center">Current Month Cumulative</h6>
        </div>
        <div className="col-6 bg-danger">
          <PieChart isShowLegend={false} />
          <h6 className="text-center">Till Date Cumulative</h6>
        </div>
      </div>
    </>
  );
}
