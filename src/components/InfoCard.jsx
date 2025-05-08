import { Sigma, Zap } from "lucide-react";
import React from "react";

export default function InfoCard({ title, value, icon, flag = null }) {
  const iconMap = {
    liveGeneration: <Zap size={16} style={{ color: "white" }} />,
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
  };
  return (
    <div
      className="d-grid"
      style={{
        gridTemplateRows: "1fr 1fr",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(28, 103, 72, 1)" }}
        className="d-flex justify-content-around align-items-center"
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
            lineHeight: "12px",
            padding: "2px 4px",
          }}
        >
          {title}
        </div>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0, 236, 157, 1)",
            padding: "0px 3px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {iconMap[icon] !== undefined ? iconMap[icon] : icon}
        </div>
      </div>
      <div
        style={
          {
            // backgroundColor: "rgba(94, 221, 156, 1)",
          }
        }
        className="d-flex justify-content-center align-items-center"
      >
        <span className="me-1 fw-bold">{value}</span>
        <span className="fw-normal">
          {flag === "pm" ? "µg/m\u00B3" : flag === "humidity" ? "%" : "MWh"}
        </span>
      </div>
    </div>
  );
}
