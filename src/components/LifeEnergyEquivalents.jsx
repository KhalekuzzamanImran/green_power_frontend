import { Factory, Package, TreePine } from "lucide-react";
import React from "react";

function LifeEnergyEquivalents({ iconName, title, value }) {
  const iconMap = {
    Tree: <TreePine />,
    "CO₂": <Factory />,
    Coal: <Package />,
  };
  return (
    <div
      className=" d-grid"
      style={{
        gridTemplateColumns: "1fr 4fr",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(28, 103, 72, 1)",
          boxShadow: "4px 0 6px -1px rgba(0,0,0,0.25)",
        }}
        className="d-flex flex-column justify-content-center align-items-center text-light"
      >
        <div>{iconMap[iconName]}</div>
        <div className="fw-bold">{iconName}</div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(95, 221, 157, 1)",
          // backgroundColor: "#e3f1f4",
          padding: "5px 10px",
          letterSpacing: "1px",
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default LifeEnergyEquivalents;
