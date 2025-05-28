import React from "react";

export default function Legends() {
  const labels = ["Solar", "Grid", "Generator"];
  const colors = [
    "rgba(0, 227, 150, 1)",
    "rgba(0, 143, 251, 1)",
    "rgba(255, 69, 96, 1)",
  ];

  return (
    <div>
      <div
        style={{ fontSize: "12px", color: "black" }}
        className="p-2 pt-3 mt-4"
      >
        {labels.map((label, i) => (
          <div
            key={i}
            className="d-flex align-items-center mb-1"
            style={{ gap: "6px" }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: colors[i],
                display: "inline-block",
              }}
            ></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
