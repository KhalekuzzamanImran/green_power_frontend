import React from "react";

export default function StatusCard({ title }) {
  let content = "";
  if (title === "Location") {
    content = "";
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
          className=""
          style={{ lineHeight: "10px", padding: "0px 10px", fontSize: "13px" }}
        >
          <span className="me-2 fw-semibold">COD: </span>
          <span>Undefined</span>
        </div>
        <div
          className=""
          style={{ lineHeight: "10px", padding: "0px 10px", fontSize: "13px" }}
        >
          <span className="me-2 fw-semibold">Client: </span>
          <span className="fw-semibold">Green Power</span>
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
      <div className="text-center fw-semibold" style={{ fontSize: "14px" }}>
        {title}
      </div>
      {content}
    </div>
  );
}
