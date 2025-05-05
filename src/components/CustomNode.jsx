import { Handle, Position } from "@xyflow/react";

export default function CustomNode({ data, id }) {
  const type = id === "home" ? "target" : "source";
  const position =
    id === "solar_panel" || id === "generator" || id == "pdb"
      ? Position.Right
      : Position.Left;

  if (id === "eldc") {
    return (
      <div style={styles.eldcContainer}>
        <div style={styles.eldcImageWrapper}>
          <img
            src={data.img_src || null}
            alt={`${data.label}_image`}
            width={200}
            height={200}
          />
        </div>
        <Handle
          type="target"
          position={Position.Left}
          id="eldc_left_target_1"
          style={{ top: "25%" }}
        />
        <Handle
          type="target"
          position={Position.Left}
          id="eldc_left_target_2"
          style={{ top: "50%" }}
        />
        <Handle
          type="target"
          position={Position.Left}
          id="eldc_left_target_3"
          style={{ top: "75%" }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="eldc_right_source"
          style={{ top: "50%" }}
        />
      </div>
    );
  }

  return (
    <div style={styles.nodeContainer}>
      {data?.img_src && (
        <div style={styles.imageWrapper}>
          <img
            src={data.img_src || null}
            alt={`${data.label}_image`}
            style={styles.image}
          />
        </div>
      )}
      <div style={styles.label}>{data.label}</div>
      <Handle
        type={type}
        position={position}
        id={`${id}_${position}_${type}`}
      />
    </div>
  );
}

const styles = {
  eldcContainer: {
    width: "140px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    marginTop: "4px",
    marginLeft: "4px",
  },
  eldcImageWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nodeContainer: {
    position: "relative",
    border: "1px solid #6b7280",
    borderRadius: "4px",
    width: "160px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  label: {
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "12px",
    marginTop: "4px",
  },
};
