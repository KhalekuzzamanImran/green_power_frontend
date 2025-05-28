import React, { useMemo } from "react";
import Chart from "react-apexcharts";

// Utility function to scale and label power values
const formatPowerValue = (val) => {
  if (val < 1000) return `${val.toFixed(2)} kW`;
  return `${(val / 1000).toFixed(2)} MW`;
};

// Utility to get today's start and end in milliseconds
const getTodayTimeRange = () => {
  const start = new Date();
  start.setHours(6, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return { start: start.getTime(), end: end.getTime() + 21600000 };
};

const SolarGenerationCurve = React.memo(({ data = [] }) => {
  const { start, end } = useMemo(getTodayTimeRange, []);

  const series = useMemo(
    () => [
      {
        name: "Solar Power",
        data: data.map(([timestamp, value]) => ({
          x: new Date(timestamp).getTime() + 21600000 * 2, // Adjusted timezone?
          y: value,
        })),
      },
    ],
    [data]
  );

  const options = useMemo(
    () => ({
      chart: {
        id: "solar-generation-curve",
        type: "line",
        toolbar: { show: true },
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
      },
      colors: ["rgba(28, 103, 72, 1)"],
      stroke: {
        width: 2,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        min: start,
        max: end,
        labels: {
          datetimeFormatter: { hour: "HH:mm" },
        },
        title: {
          text: "Time of Day",
          style: {
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        labels: {
          formatter: formatPowerValue,
        },
        title: {
          text: "Solar Power",
          offsetX: -5,
          offsetY: 10,
          style: {
            color: "#333",
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
          },
        },
      },

      tooltip: {
        x: {
          format: "dd MMM yyyy HH:mm:ss",
        },
        y: {
          formatter: formatPowerValue,
        },
      },
    }),
    [start, end]
  );

  return (
    <div className="px-2 pt-2">
      <Chart options={options} series={series} type="line" height="100%" />
    </div>
  );
});

export default SolarGenerationCurve;
