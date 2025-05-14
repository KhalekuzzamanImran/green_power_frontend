import React from "react";
import Chart from "react-apexcharts";

export default function PieChart({ data = [0, 0, 0] }) {
  console.log(data);
  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Solar", "Grid", "Generator"],
    colors: ["#1C6748", "#92F9E6", "#5FDD9D"],
    legend: {
      show: false,
      position: "center",
    },
    stroke: {
      show: false, // ❌ disables the border stroke
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        colors: ["#000"], // or use a specific color for each slice: ['#fff', '#000', '#333']
      },
      formatter: function (val, opts) {
        return `${val.toFixed(1)}%`; // Shows percentage with 1 decimal
      },
      dropShadow: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Chart
        options={options}
        series={data.map(Number)}
        type="pie"
        width="50%"
        height="100%"
      />
    </div>
  );
}
