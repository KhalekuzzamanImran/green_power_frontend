import React from "react";
import StatusCard from "./StatusCard";
import WeatherWidget from "./WeatherWidget";
import WebClock from "./WebClock";

function Header() {
  return (
    <div
      className="d-grid border border-2 border-secondary rounded"
      style={{
        gridTemplateColumns: "2fr 6fr 2fr",
        gap: "10px",
        backgroundColor: "rgb(209 255 226)",
      }}
    >
      {/* Web Clock */}
      <div className="d-flex justify-content-end align-items-center">
        <WebClock />
      </div>
      <div className=" d-flex justify-content-center align-items-center gap-2">
        <WeatherWidget />
        <StatusCard title={`Solar Irradiation`} />
        <StatusCard title={`Location`} />
        <StatusCard title={`Project Highlights`} />
      </div>
      {/* Logo Section */}
      <div className=" d-flex justify-content-center align-items-center">
        <img
          src="/images/logo.png"
          alt="Green Power"
          style={{
            width: "100%",
            height: "70px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
