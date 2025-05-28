import React from "react";
import SolarGenerationCurve from "./SolarGenerationCurve";
import DayLoadCurve from "./DayLoadCurve";

function Footer({ solarData, gridData }) {
  // Combine solar and grid power based on rounded timestamp (to nearest minute)
  const combinePowerData = (solarData, gridData) => {
    const roundToMinute = (timeString) => {
      if (!timeString) return null;

      // Check if the input is just a time string
      const isTimeOnly = /^\d{2}:\d{2}:\d{2}(\.\d+)?$/.test(timeString);
      let date;

      if (isTimeOnly) {
        const todayStr = new Date().toISOString().split("T")[0]; // e.g., "2025-05-28"
        date = new Date(`${todayStr}T${timeString}`);
      } else {
        date = new Date(timeString);
      }

      if (isNaN(date.getTime())) {
        console.warn("Invalid timestamp:", timeString);
        return null;
      }

      date.setSeconds(0, 0); // round to nearest minute
      return date.getTime();
    };

    // console.log(
    //   new Date(roundToMinute(gridData?.[0]?.data?.[0]?.created_time)).getTime(),
    //   new Date(roundToMinute(solarData?.[0]?.timestamp) + 21600000).getTime()
    // );

    const powerMap = new Map();

    // Step 1: Add solarData
    solarData?.forEach((entry) => {
      const time = roundToMinute(entry?.timestamp);
      if (time !== null) {
        const power =
          (entry?.power?.[0] || 0) +
          (entry?.power?.[1] || 0) +
          (entry?.power?.[2] || 0);
        powerMap.set(time, power);
      }
    });

    // Step 2: Add gridData only if timestamp exists from solarData
    gridData?.[0]?.data?.forEach((entry) => {
      const time = roundToMinute(entry?.created_time) - 21600000;
      // if (powerMap.has(time)) console.log(powerMap.get(time), entry?.pc);
      if (time !== null && powerMap.has(time)) {
        const power = entry?.pc || 0;
        powerMap.set(time, powerMap.get(time) + power);
      }
    });

    // Step 3: Format result
    return Array.from(powerMap.entries())
      .map(([timestamp, totalPower]) => [timestamp, totalPower])
      .sort((a, b) => a[0] - b[0]);
  };

  const combinedData = combinePowerData(solarData, gridData);

  const solarTemp = solarData?.map((entry) => [
    entry?.timestamp,
    (entry?.power?.[0] || 0) +
      (entry?.power?.[1] || 0) +
      (entry?.power?.[2] || 0),
  ]);

  return (
    <div
      className="d-grid"
      style={{
        gridTemplateColumns: "1fr 1fr",
        gap: "7px",
      }}
    >
      {/* Solar Generation Curve */}
      <div
        className="d-grid border border-2 border-secondary rounded"
        style={{
          gridTemplateRows: "1fr 6fr",
          backgroundColor: "rgb(209 255 226)",
          boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="text-center border border-2 rounded text-light fs-6 fw-semibold"
          style={{
            backgroundColor: "#1c6748",
            letterSpacing: "2px",
            padding: "2px 0px",
          }}
        >
          Solar Generation Curve
        </div>
        <div>
          <SolarGenerationCurve data={solarTemp} />
        </div>
      </div>

      {/* Day Load Curve */}
      <div
        className="d-grid border border-2 border-secondary rounded"
        style={{
          gridTemplateRows: "1fr 6fr",
          backgroundColor: "rgb(209 255 226)",
        }}
      >
        <div
          className="text-center border border-2 rounded text-light fs-6 fw-semibold"
          style={{
            backgroundColor: "#1c6748",
            letterSpacing: "2px",
            padding: "2px 0px",
          }}
        >
          Day Load Curve
        </div>
        <div>
          <DayLoadCurve data={combinedData} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
