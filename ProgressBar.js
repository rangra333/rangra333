import React from "react";

function ProgressBar() {
  return (
    <div>
      <div style={{ height: "5px", width: "100%", pading: "2px" }}>
        <div
          style={{ color: "blue", height: "4px", width: "25%", pading: "2px" }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
