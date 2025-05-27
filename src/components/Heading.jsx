import React from "react";

function Heading({ title }) {
  return (
    <div
      className="#007a92 text-center border border-2 rounded text-light fs-6 fw-semibold"
      style={{
        backgroundColor: "#1c6748",
        letterSpacing: "2px",
        padding: "1px 0px",
      }}
    >
      {title}
    </div>
  );
}

export default Heading;
