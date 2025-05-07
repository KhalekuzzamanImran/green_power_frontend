import React from "react";
import Chart from "react-apexcharts";

export default function PieChart(props) {
  const options = {
    chart: {
      type: "pie",
    },

    labels: ["Solar", "Grid", "Generator"],
    colors: ["#008FFB", "#00E396", "#FF4560"],

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
    <div className="bg-warning d-flex flex-column justify-content-center align-items-center">
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
