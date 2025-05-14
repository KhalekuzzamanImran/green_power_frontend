import React from "react";
import Chart from "react-apexcharts";

export default function PieChart(props) {
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

  const sereis = [44, 55, 13];
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <Chart
        options={options}
        series={sereis}
        type="pie"
        width={`50%`}
        height={`100%`}
      />
    </div>
  );
}
