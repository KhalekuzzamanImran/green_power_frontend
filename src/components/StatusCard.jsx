import React from "react";
import GoogleMapComponent from "./GoogleMapComponent";

export default function StatusCard({ title }) {
  const codDate = new Date("2025-02-27"); // COD: 27th February 2025
  const today = new Date();

  // Clear time part for accurate difference in days
  codDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffInTime = today - codDate;
  const operationalDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  // console.log(`COD Date: ${codDate.toDateString()}`);
  // console.log(`Operational Days: ${operationalDays}`);

  let content = "";
  if (title === "Location") {
    content = <GoogleMapComponent />;
  } else if (title === "Project Highlights") {
    content = (
      <div style={{ fontSize: "13px", paddingLeft: "10px" }}>
        <div style={{ display: "flex", marginBottom: "4px" }}>
          <div style={{ minWidth: "60px", fontWeight: "600" }}>Capacity</div>
          <div style={{ margin: "0 4px" }}>:</div>
          <div style={{ fontWeight: "600" }}>45 MWh</div>
        </div>

        <div style={{ display: "flex", marginBottom: "4px" }}>
          <div style={{ minWidth: "60px", fontWeight: "600" }}>COD</div>
          <div style={{ margin: "0 4px" }}>:</div>
          <div>{`27 February (${operationalDays} Days)`}</div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ minWidth: "60px", fontWeight: "600" }}>Client</div>
          <div style={{ margin: "0 4px" }}>:</div>
          <div style={{ fontWeight: "600" }}>CCCL</div>
        </div>
      </div>
    );
  } else if (title === "Solar Irradiation") {
    content = (
      <div className="d-flex justify-content-center align-items-center">
        <h5>
          <span className="pe-2">25</span>
          <span>Wh/m²</span>
        </h5>
      </div>
    );
  }
  return (
    <div
      style={{
        width: "28%",
        height: "95%",
        backgroundColor: "#e3f1f4",
        border: "2px solid #507680",
        borderRadius: "5px",
        color: "#0d355c",
        display: "grid",
        gridTemplateRows: "1.5fr 3.5fr",
      }}
    >
      <div
        className="text-center fw-semibold"
        style={{
          fontSize: "14px",
          letterSpacing: "1px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          textDecoration: "underline",
        }}
      >
        {title}
      </div>
      {content}
    </div>
  );
}
