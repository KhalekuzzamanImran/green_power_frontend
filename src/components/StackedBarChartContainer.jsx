import React from "react";
import Legends from "./Legends";
import StackedBarChart from "./StackedBarChart";

const StackedBarChartContainer = ({ data }) => {
  console.log(data?.[1]?.data);
  const chartData = {
    daily: data?.[0]?.data || [0, 0, 0],
    currentMonth: data?.[1]?.data || [0, 0, 0],
    tillDate: data?.[2]?.data || [0, 0, 0],
  };
  return (
    <div
      className="d-grid"
      style={{
        gridTemplateRows: "1fr 3fr",

        boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <Legends />
      <StackedBarChart chartData={chartData} />
    </div>
  );
};

export default StackedBarChartContainer;
