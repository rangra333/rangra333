import React from "react";

function Career({ career }) {
  return (
    <div>
      <h3>{career.title}</h3>
      <div>{career.description}</div>
    </div>
  );
}

export default Career;
