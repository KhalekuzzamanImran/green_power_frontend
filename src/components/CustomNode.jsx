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
        <div
          className="text-center"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          {data.label}
        </div>
        <Handle
          type="target"
          position={Position.Left}
          id="eldc_left_target_1"
          style={{ top: "51%" }}
        />
        <Handle
          type="target"
          position={Position.Left}
          id="eldc_left_target_2"
          style={{ top: "63%" }}
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
          style={{ top: "63%" }}
        />
      </div>
    );
  }

  return (
    <div style={{ ...styles.nodeContainer }} className="bg-secondary">
      {data?.img_src && (
        <div
          style={styles.imageWrapper}
          className={`${id === "home" && "justify-content-start"}`}
        >
          <img
            src={data.img_src || null}
            alt={`${data.label}_image`}
            style={styles.image}
          />
        </div>
      )}
      <div
        style={styles.label}
        className={`${id === "home" && "justify-content-start ps-4"}`}
      >
        {data.label}
      </div>
      {/* <div
        style={{
          width: "150px",
          height: "150px",
          overflow: "hidden",
        }}
      >
        <img
          src={data.img_src || null}
          alt={`${data.label}_image`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div> */}

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
    height: "180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    marginTop: "4px",
    marginLeft: "4px",
    backgroundColor: "gray",
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
    height: "140px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // padding: "8px",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  },
  label: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "24px",
  },
};
