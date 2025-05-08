import React from "react";

export default function StatusCard({ title }) {
  let content = "";
  if (title === "Location") {
    content = "";
  }
  return (
    <div
      style={{
        width: "20%",
        height: "85%",
        backgroundColor: "#e3f1f4",
        border: "2px solid #507680",
        borderRadius: "5px",
        color: "#0d355c",
        padding: "1px 10px",
      }}
    >
      <h2 className="fs-6 text-center">{title}</h2>
      {content}
    </div>
  );
}
