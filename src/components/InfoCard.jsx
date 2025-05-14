import { Sigma, Zap } from "lucide-react";
import React from "react";

export default function InfoCard({ title, value, icon, flag = null }) {
  let unit = "";
  switch (flag) {
    case "pm":
      unit = "µg/m\u00B3";
      break;
    case "humidity":
      unit = "%";
      break;
    case "taka":
      unit = "/-";
      break;
    default:
      unit = value < 1000 ? "kWh" : "MWh";
  }
  let cardValue = "";
  {
    icon === "taka"
      ? Number(value < 1000 ? value : value)
      : Number(value < 1000 ? value : value / 1000).toFixed(2);
  }
  if (flag === "pm") {
    cardValue = Number(value < 1000 ? value : value / 1000);
  } else if (flag === "taka") {
    cardValue = Number(value);
  } else {
    cardValue = Number(value < 1000 ? value : value / 1000).toFixed(2);
  }
  const iconMap = {
    liveGeneration: (
      <Zap
        size={16}
        strokeWidth={2.5}
        style={{ color: "white", marginBottom: "3px" }}
      />
    ),
    cumulativeGeneration: (
      <div className="d-flex align-items-center justify-content-center">
        <Sigma
          size={16}
          strokeWidth={2.5}
          style={{ color: "white", margin: "3px 0px" }}
        />
        <Zap size={12} style={{ color: "white", marginLeft: "-4px" }} />
      </div>
    ),
    taka: (
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          padding: "0px 4px",
        }}
      >
        ৳
      </div>
    ),
  };
  return (
    <div
      className="d-grid"
      style={{
        gridTemplateRows: "1fr 1fr",
        boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(28, 103, 72, 1)" }}
        className="d-flex justify-content-around align-items-center"
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "400",
            color: "white",
            lineHeight: "13px",
            padding: "2px 4px",
            letterSpacing: "1px",
          }}
        >
          {title}
        </div>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0, 236, 157, 1)",
            padding: "1px 4px",
            borderRadius: "5px",
          }}
        >
          {iconMap[icon] !== undefined ? iconMap[icon] : icon}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(94, 221, 156, 1)",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="me-1 fw-bold">{cardValue}</span>
        <span className="fw-bold">{unit}</span>
      </div>
    </div>
  );
}
