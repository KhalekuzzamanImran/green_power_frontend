import Chart from "react-apexcharts";

const BarChart = ({ data = [] }) => {
  const hourlyDiffMap = new Map();

  data?.forEach(([timestamp, value]) => {
    const date = new Date(timestamp);
    if (isNaN(date)) return;

    const hour = date.getUTCHours(); // Use UTC hour

    if (!hourlyDiffMap.has(hour)) {
      hourlyDiffMap.set(hour, { first: value, last: value });
    } else {
      const entry = hourlyDiffMap.get(hour);
      entry.last = value;
      hourlyDiffMap.set(hour, entry);
    }
  });

  const sortedHours = [...hourlyDiffMap.keys()].sort((a, b) => a - b);
  const differences = sortedHours.map(
    (hour) => hourlyDiffMap.get(hour).last - hourlyDiffMap.get(hour).first
  );

  // ✅ Correct AM/PM formatting for UTC hours
  const formatHour = (hour) => {
    const period = hour >= 12 ? "AM" : "PM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour} ${period}`;
  };

  const chartCategories = sortedHours.map(formatHour);

  const formatEnergy = (val) => {
    if (val < 1000) return `${val.toFixed(2)} Wh`;
    return `${(val / 1000).toFixed(2)} kWh`;
  };

  const series = [
    {
      name: "Energy Consumption",
      data: differences,
    },
  ];

  const options = {
    chart: {
      id: "delta_energy_chart",
      type: "bar",
      animations: {
        enabled: true,
        easing: "easeinout",
        dynamicAnimation: { speed: 500 },
      },
      toolbar: { autoSelected: "zoom" },
    },
    xaxis: {
      categories: chartCategories,
      title: {
        text: "Time of Day",
        style: { fontSize: "13px", fontWeight: 600 },
      },
    },
    yaxis: {
      title: {
        text: "Power",
        style: { fontSize: "13px", fontWeight: 600 },
      },
      labels: {
        formatter: formatEnergy,
        style: { fontSize: "12px" },
      },
    },
    tooltip: {
      x: {
        formatter: (_, { dataPointIndex }) =>
          `Hour: ${formatHour(sortedHours[dataPointIndex])}`,
      },
      y: {
        formatter: formatEnergy,
        title: { formatter: () => "Power" },
      },
    },
    colors: ["#1a9167"],
    dataLabels: { enabled: false },
    fill: {
      type: "solid",
    },
  };

  return (
    <div className="px-2 py-3">
      <Chart
        options={options}
        series={series}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default BarChart;
