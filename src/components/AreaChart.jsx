import Chart from "react-apexcharts";

const AreaChart = ({ data }) => {
  const series = [
    {
      name: "Energy Consumption Data",
      data: data?.map((arr) => arr[1]),
    },
  ];
  const options = {
    chart: {
      id: "energy_consumption",
      type: "area",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },

    xaxis: {
      categories: data?.map((arr) => {
        const date = new Date(arr[0]);
        return date.toISOString();
      }),
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "hh:mm tt",
          month: "hh:mm tt",
          day: "hh:mm tt",
          hour: "hh:mm tt",
        },
      },
      title: {
        text: "Time of Day",
        offsetY: 5,
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
          let value = val < 1000 ? val : val < 1000000 ? val : val / 1000000;
          let unit = val < 1000 ? "W" : val < 1000000 ? "kW" : "MW";
          return `${value?.toFixed(2)} ${unit}`;
        },
      },
      title: {
        text: "Power",
        offsetX: -5,
        style: {
          color: "#333",
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 600,
        },
      },
    },

    dataLabels: {
      enabled: false,
    },

    colors: ["black"],
    markers: {
      size: 0,
      colors: ["black"],
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    legend: {
      show: true,
    },
    grid: {
      // row: {
      //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      //   opacity: 0.5,
      // },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      hideEmptySeries: true,
      // fillSeriesColor: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      x: {
        show: true,
        format: "dd MMM, HH:mm",
        formatter: undefined,
      },
      y: {
        // formatter: undefined,
        formatter: function (val) {
          let value = val < 1000 ? val : val / 1000;
          let unit = val < 1000 ? "Wh" : "kWh";
          return `${value?.toFixed(2)} ${unit}`;
        },
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: true,
      },
      items: {
        display: "flex",
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
  };
  return (
    <div className="px-2 py-3">
      <Chart
        options={options}
        series={series}
        type="area"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default AreaChart;
