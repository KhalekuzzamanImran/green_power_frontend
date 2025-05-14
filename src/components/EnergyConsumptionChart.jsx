import Chart from "react-apexcharts";

function EnergyConsumtionChart(props) {
  //   console.log(props.data);
  const series = [
    {
      name: "Energy Consumtion",
      data: props.data?.map((arr) => arr[1]),
    },
  ];

  const options = {
    chart: {
      id: "realtimeEnergy",
      height: 150,
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
    colors: ["black"],
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      colors: ["black"],
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    title: {
      display: false,
    },
    legend: {
      show: true,
    },
    // start editing..
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
    yaxis: {
      labels: {
        formatter: function (val) {
          let value = val < 1000 ? val : val / 1000;
          let unit = val < 1000 ? "Wh" : "kWh";
          return `${value?.toFixed(1)} ${unit}`;
        },
      },
      // title: {
      //   text: 'Price',
      // },
    },
    xaxis: {
      categories: props.data?.map((arr) => {
        const date = new Date(arr[0]); // Convert timestamp to Date object
        date.setHours(date.getHours() + 6); // Add 6 hours
        return date.toISOString(); // Convert back to ISO string (or use a different format if necessary)
      }),
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "hh:mm tt",
        },
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
    <div style={{ width: "100%" }} className="pt-2">
      {props.data?.length > 0 && (
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}

export default EnergyConsumtionChart;
