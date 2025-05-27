import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import CustomNode from "./CustomNode";
import TitleNode from "./TitleNode";
import { AnimatedSVGEdge } from "./AnimatedSVGEdge";

const defaultViewport = { x: 0, y: 0, zoom: 1 };

const edgeColors = {
  solar: "green",
  generator: "red",
  home: "#c9c747",
  pdb: "black",
};

const initialNodes = [
  {
    id: "solar_panel",
    type: "customNode",
    position: { x: 0, y: -180 },
    data: { label: "Solar Panel", img_src: "/images/solar.png" },
  },
  {
    id: "generator",
    type: "customNode",
    position: { x: 0, y: 0 },
    data: { label: "Generator", img_src: "/images/generator.png" },
  },
  {
    id: "pdb",
    type: "customNode",
    position: { x: 0, y: 180 },
    data: { label: "PDB", img_src: "/images/grid.png" },
  },
  {
    id: "eldc",
    type: "customNode",
    position: { x: 500, y: -35 },
    data: { label: "ELDC", img_src: "/images/eldc.png" },
  },
  {
    id: "home",
    type: "customNode",
    position: { x: 750, y: 0 },
    data: { label: "Home", img_src: "/images/home.png" },
  },
  {
    id: "solar_title",
    type: "titleNode",
    position: { x: 190, y: -195 },
    data: { label: "Solar Panel" },
  },
  {
    id: "generator_title",
    type: "titleNode",
    position: { x: 190, y: -15 },
    data: { label: "Generator" },
  },
  {
    id: "home_title",
    type: "titleNode",
    position: { x: 760, y: -100 },
    data: { label: "Home" },
  },
  {
    id: "pdb_title",
    type: "titleNode",
    position: { x: 190, y: 165 },
    data: { label: "PDB" },
  },
];

const initialEdges = [
  {
    id: "solar_panel_to_eldc",
    type: "smoothstep",
    source: "solar_panel",
    target: "eldc",
    targetHandle: "eldc_left_target_1",
    // animated: true,
    style: { stroke: edgeColors.solar, strokeWidth: "3" },
  },
  {
    id: "generator_to_eldc",
    type: "smoothstep",
    source: "generator",
    target: "eldc",
    targetHandle: "eldc_left_target_2",
    // animated: true,
    style: { stroke: edgeColors.generator, strokeWidth: "3" },
  },
  {
    id: "eldc_to_home",
    type: "smoothstep",
    source: "eldc",
    sourceHandle: "eldc_right_source",
    target: "home",
    // animated: true,
    style: { stroke: edgeColors.home, strokeWidth: "3" },
  },
  {
    id: "pdb_to_eldc",
    type: "smoothstep",
    source: "pdb",
    target: "eldc",
    targetHandle: "eldc_left_target_3",
    // animated: true,
    style: { stroke: edgeColors.pdb, strokeWidth: "3" },
  },
];

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
// const nodeTypes = { customNode: CustomNode };

function ReactFlowDiagram({
  generatorData,
  energyData,
  solarData,
  loading,
  error,
}) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const nodeTypes = useMemo(
    () => ({
      customNode: CustomNode,
      titleNode: TitleNode,
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const totalGeneratorCurrent =
    (generatorData?.ia || 0) +
    (generatorData?.ib || 0) +
    (generatorData?.ic || 0);

  const totalPDBCurrent =
    (energyData?.ia || 0) + (energyData?.ib || 0) + (energyData?.ic || 0);

  const totalSolarCurrent =
    (solarData?.current?.[0] || 0) +
    (solarData?.current?.[1] || 0) +
    (solarData?.current?.[2] || 0);

  const totalSolarPower =
    (solarData?.power?.[0] || 0) +
    (solarData?.power?.[1] || 0) +
    (solarData?.power?.[2] || 0);

  const totalSolarPowerInWatt = totalSolarPower * 1000;

  const totalHomeCurrent =
    totalGeneratorCurrent + totalPDBCurrent + totalSolarCurrent;

  useEffect(() => {
    // Update edge types based on generator and energy data
    setEdges((prevEdges) =>
      prevEdges.map((edge) => {
        if (edge.id === "generator_to_eldc") {
          return {
            ...edge,
            type: totalGeneratorCurrent === 0 ? "smoothstep" : "animatedSvg",
          };
        }
        if (edge.id === "solar_panel_to_eldc") {
          return {
            ...edge,
            type:
              totalSolarCurrent >= 1 && totalSolarPowerInWatt >= 200
                ? "animatedSvg"
                : "smoothstep",
          };
        }
        if (edge.id === "pdb_to_eldc") {
          return {
            ...edge,
            type: totalPDBCurrent === 0 ? "smoothstep" : "animatedSvg",
          };
        }
        if (edge.id === "eldc_to_home") {
          return {
            ...edge,
            type: totalHomeCurrent === 0 ? "smoothstep" : "animatedSvg",
          };
        }
        return edge;
      })
    );
  }, [
    totalGeneratorCurrent,
    totalSolarCurrent,
    totalPDBCurrent,
    totalHomeCurrent,
    totalSolarPowerInWatt,
    setEdges,
  ]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
      zoomOnScroll={false}
      panOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      panOnDrag={false}
      preventScrolling={false}
      nodesDraggable={false}
      defaultViewport={defaultViewport}
      className="reactflow-instance"
    />
  );
}

export default ReactFlowDiagram;
