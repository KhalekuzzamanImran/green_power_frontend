import Chart from "react-apexcharts";

const BarChart = ({ data }) => {
  function getFirstAndLastPerHour(arr) {
    const firstAndLastValuesPerHour = new Map();

    arr.forEach(([timestamp, value]) => {
      const hourKey = (new Date(timestamp).getHours() + 6) % 24;

      const current = firstAndLastValuesPerHour.get(hourKey);
      const newEntry = [timestamp, value];

      if (!current) {
        firstAndLastValuesPerHour.set(hourKey, {
          first: newEntry,
          last: newEntry,
        });
      } else {
        const [firstTime] = current.first;
        const [lastTime] = current.last;

        if (new Date(timestamp) < new Date(firstTime)) {
          current.first = newEntry;
        }

        if (new Date(timestamp) > new Date(lastTime)) {
          current.last = newEntry;
        }

        firstAndLastValuesPerHour.set(hourKey, current);
      }
    });

    return Array.from(firstAndLastValuesPerHour.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([hour, { first, last }]) => [hour, last[1] - first[1]]);
  }

  const calculatedData = getFirstAndLastPerHour(data);
  console.log(calculatedData);

  const series = [
    {
      name: "Energy consumption per hour",
      data: calculatedData.map(([, diff]) => diff),
    },
  ];

  const options = {
    chart: {
      id: "energy_consumption",
      type: "bar",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: { speed: 1000 },
      },
      zoom: { enabled: false },
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: {
            filename: "energy_consumption",
            headerCategory: "Time (24-hour format)", // <-- ✅ Custom header for x-axis
            headerValue: "Energy consumption per hour(Wh)", // <-- ✅ Custom header for series
          },
        },
      },
    },

    xaxis: {
      categories: calculatedData.map(([hour]) => {
        return `${hour.toString().padStart(2, "0")}:00`;
      }),
      title: {
        text: "Hour of Day",
        style: {
          color: "#333",
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 600,
        },
      },
    },

    yaxis: {
      labels: {
        formatter: function (val) {
          const value = val < 1000 ? val : val / 1000;
          const unit = val < 1000 ? "Wh" : "kWh";
          return `${value.toFixed(2)} ${unit}`;
        },
      },
      title: {
        text: "Energy Consumption",
        offsetY: 22,
        style: {
          color: "#333",
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 600,
        },
      },
    },

    dataLabels: { enabled: false },

    colors: ["#1a9167"],
    markers: { size: 0 },
    stroke: { show: true, width: 2 },

    legend: { show: true },

    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shadeIntensity: 1,
    //     opacityFrom: 0.2,
    //     opacityTo: 0,
    //     stops: [0, 90, 100],
    //   },
    // },

    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          const value = val < 1000 ? val : val / 1000;
          const unit = val < 1000 ? "Wh" : "kWh";
          return `${value.toFixed(2)} ${unit}`;
        },
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
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
