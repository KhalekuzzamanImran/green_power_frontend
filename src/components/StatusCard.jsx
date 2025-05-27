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
      <div
        className="d-grid"
        style={{
          gridTemplateRows: "1fr 1fr 1fr",
        }}
      >
        <div
          className=""
          style={{ lineHeight: "10px", padding: "2px 10px", fontSize: "13px" }}
        >
          <span className="me-2 fw-semibold">Capacity: </span>
          <span className="fw-semibold">45 MWh</span>
        </div>
        <div
          className="fw-semibold"
          style={{ lineHeight: "10px", padding: "0px 10px", fontSize: "13px" }}
        >
          <span className="me-2">COD: </span>
          <span>{`27 Feb (${operationalDays} days)`}</span>
        </div>
        <div
          className=""
          style={{ lineHeight: "10px", padding: "0px 10px", fontSize: "13px" }}
        >
          <span className="me-2 fw-semibold">Client: </span>
          <span className="fw-semibold">CCCL</span>
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
        width: "20%",
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
