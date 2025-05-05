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

const defaultViewport = { x: 0, y: 0, zoom: 1 };

const initialNodes = [
  {
    id: "solar_panel",
    type: "customNode",
    position: { x: -100, y: -220 },
    data: { label: "Solar Panel", img_src: "/images/solar.png" },
  },
  {
    id: "generator",
    type: "customNode",
    position: { x: -100, y: 0 },
    data: { label: "Generator", img_src: "/images/generator1.png" },
  },
  {
    id: "pdb",
    type: "customNode",
    position: { x: -100, y: 220 },
    data: { label: "PDB", img_src: "/images/pdb.png" },
  },
  {
    id: "eldc",
    type: "customNode",
    position: { x: 250, y: 0 },
    data: { label: "ELDC", img_src: "/images/eldc.png" },
  },
  {
    id: "home",
    type: "customNode",
    position: { x: 520, y: 0 },
    data: { label: "Home", img_src: "/images/home.png" },
  },
  {
    id: "solar_title",
    type: "titleNode",
    position: { x: -210, y: 0 },
    data: { label: "Solar Panel" },
  },
  {
    id: "generator_title",
    type: "titleNode",
    position: { x: -210, y: 120 },
    data: { label: "Generator" },
  },
  {
    id: "home_title",
    type: "titleNode",
    position: { x: 760, y: 0 },
    data: { label: "Home" },
  },
  {
    id: "pdb_title",
    type: "titleNode",
    position: { x: 760, y: 120 },
    data: { label: "PDB" },
  },
];

const edgeColors = {
  solar: "green",
  generator: "red",
  home: "#c9c747",
  pdb: "black",
};

const initialEdges = [
  {
    id: "solar_panel_to_eldc",
    type: "smoothstep",
    source: "solar_panel",
    target: "eldc",
    targetHandle: "eldc_left_target_1",
    animated: true,
    // style: { stroke: edgeColors.solar, strokeWidth: "2" },
  },
  {
    id: "generator_to_eldc",
    type: "smoothstep",
    source: "generator",
    target: "eldc",
    targetHandle: "eldc_left_target_2",
    animated: true,
    // style: { stroke: edgeColors.generator, strokeWidth: "2" },
  },
  {
    id: "eldc_to_home",
    type: "smoothstep",
    source: "eldc",
    sourceHandle: "eldc_right_source",
    target: "home",
    animated: true,
    // style: { stroke: edgeColors.home, strokeWidth: "2" },
  },
  {
    id: "pdb_to_eldc",
    type: "smoothstep",
    source: "pdb",
    target: "eldc",
    targetHandle: "eldc_left_target_3",
    animated: true,
    // style: { stroke: edgeColors.pdb, strokeWidth: "2" },
  },
];

export default function ReactFlowDiagram() {
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
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      // edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
      zoomOnScroll={false}
      panOnScroll={false}
      preventScrolling={false}
      nodesDraggable={true}
      defaultViewport={defaultViewport}
      className="reactflow-instance"
    />
  );
}
