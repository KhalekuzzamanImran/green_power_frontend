import React from "react";
import { BaseEdge, getSmoothStepPath } from "@xyflow/react";

export function AnimatedSVGEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const circleColorMap = {
    solar_panel_to_eldc: "green",
    generator_to_eldc: "red",
    eldc_to_home: "#c9c747",
    pdb_to_eldc: "black",
  };

  const circleColor = circleColorMap[id] || "black";
  const circleCount = 3;
  const delayStep = 1;

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <svg>
        {Array.from({ length: circleCount }).map((_, index) => (
          <circle key={index} r="5" fill={circleColor}>
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path={edgePath}
              begin={`${index * delayStep}s`}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            />
          </circle>
        ))}
      </svg>
    </>
  );
}
