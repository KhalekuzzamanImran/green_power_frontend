import React from "react";
import Chart from "react-apexcharts";

const PieChart = (props) => {
  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Generator", "Solar", "Grid"],
    colors: ["#008FFB", "#00E396", "#FF4560"],

    legend: {
      show: props.isShowLegend,
      position: "left",
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

  const series = [44, 55, 13]; // Data for the pie slices

  return (
    <div className="pie-chart bg-warning d-flex justify-content-center align-items-center">
      {props.isShowLegend ? (
        <div
          style={{ fontSize: "12px", color: "white" }}
          className="bg-secondary p-2 pt-3 mt-4"
        >
          {options.labels.map((label, i) => (
            <div
              key={i}
              className="d-flex align-items-center mb-1"
              style={{ gap: "6px" }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: options.colors[i],
                  display: "inline-block",
                }}
              ></span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      ) : (
        <Chart
          options={options}
          series={series}
          type="pie"
          width={`100%`}
          height={`100%`}
        />
      )}
    </div>
  );
};

export default PieChart;
