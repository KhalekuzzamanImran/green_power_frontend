import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ],
    },
    title: {
      text: "",
      align: "center",
    },
    colors: ["#00E396"],
  };

  const series = [
    {
      name: "Sales",
      data: [10, 20, 30, 40, 50, 60, 70, 60, 50, 40, 30, 20, 10],
    },
  ];

  return (
    <div className="col-12 h-100">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ height: "85%" }}
      >
        <div
          className="d-flex justify-content-center"
          style={{
            writingMode: "vertical-rl", // vertical from bottom to top
            transform: "rotate(180deg)", // correct the upside-down text
            textAlign: "center",
          }}
        >
          Power [kW]
        </div>
        <div style={{ width: "100%" }}>
          <Chart
            options={options}
            series={series}
            type="bar"
            height="100%"
            width="100%"
          />
        </div>
      </div>

      <p className="text-center p-0 m-0 mb-2" style={{ height: "15%" }}>
        Time of Day
      </p>
    </div>
  );
};

export default BarChart;
