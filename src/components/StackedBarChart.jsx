import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = ({ chartData }) => {
  const rawData = [
    {
      label: "Daily",
      Solar: chartData?.daily?.[0] || 0,
      Generator: chartData?.daily?.[1] || 0,
      Grid: chartData?.daily?.[2] || 0,
    },
    {
      label: "Current Month",
      Solar: chartData?.currentMonth?.[0] || 0,
      Generator: chartData?.currentMonth?.[1] || 0,
      Grid: chartData?.currentMonth?.[2] || 0,
    },
    {
      label: "Till Date",
      Solar: chartData?.tillDate?.[0] || 0,
      Generator: chartData?.tillDate?.[1] || 0,
      Grid: chartData?.tillDate?.[2] || 0,
    },
  ];

  const labels = rawData.map((item) => item.label);
  const keys = ["Solar", "Generator", "Grid"];
  const colors = {
    Solar: "#008000", // Green
    Generator: "#FF2C2C", // Blue
    Grid: "#FFDE21", // Pink
  };

  const totalByCategory = rawData.map((item) =>
    keys.reduce((sum, key) => sum + item[key], 0)
  );

  const datasets = keys.map((key) => ({
    label: key,
    data: rawData.map((item, i) => {
      const total = totalByCategory[i] || 1; // Avoid division by zero
      return ((item[key] / total) * 100).toFixed(2);
    }),
    backgroundColor: colors[key],
    stack: "stack1",
    borderWidth: 1,
  }));

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: "100% Stacked Bar Chart",
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
        position: "bottom",
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
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Time Range",
          color: "#333",
          font: {
            size: 14,
            weight: "normal",
          },
        },
      },
      y: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
        title: {
          display: true,
          text: "Percentage",
          color: "#333",
          font: {
            size: 14,
            weight: "normal",
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "280px", paddingRight: "20px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
