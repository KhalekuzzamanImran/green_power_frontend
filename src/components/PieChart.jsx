import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ chartTitle, data = [0, 0, 0] }) => {
  const [chartData, setChartData] = useState({
    labels: ["Solar", "Generator", "Grid"],
    datasets: [
      {
        label: "Energy Sources",
        data: [0, 0, 0],
        backgroundColor: [
          "rgba(0, 227, 150, 1)",
          "rgba(255, 69, 96, 1)",
          // "rgba(0, 143, 251, 1)",
          "#c9c747",
        ],
        // borderWidth: 0,
      },
    ],
  });

  useEffect(() => {
    if (Array.isArray(data) && data.length === 3) {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: data.map(Number),
          },
        ],
      }));
    }
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: chartTitle,
        color: "#333",
        font: {
          size: 14,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce(
              (acc, val) => acc + val,
              0
            );
            const percentage =
              total > 0 ? ((value / total) * 100).toFixed(2) : 0;
            return `${label}: ${percentage}%`;
          },
        },
      },
      datalabels: {
        color: "#000",
        font: {
          weight: "bold",
          size: 16,
        },
        align: "center", // ⬅️ aligns labels outside
        anchor: "center", // ⬅️ pulls labels away from center
        offset: 0, // ⬅️ optional: tweak label distance
        clip: false,
        display: (context) => context.dataset.data[context.dataIndex] > 0,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 2,
          color: "#555",
          opacity: 0.8,
        },
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (acc, val) => acc + val,
            0
          );
          const percentage = total > 0 ? (value / total) * 100 : 0;
          return `${percentage.toFixed(1)}%`;
        },
      },
    },
  };

  return (
    <div className="d-flex justify-content-start align-items-end">
      <Pie
        data={chartData}
        options={options}
        plugins={[ChartDataLabels]}
        width={"150px"}
        height={"150px"}
      />
    </div>
  );
};

export default PieChart;
