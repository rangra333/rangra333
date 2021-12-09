import React from "react";

function Summary({ data }) {
  return (
    <div>
      <h3> {data.title}</h3>
      <div>{data.description}</div>
    </div>
  );
}

export default Summary;
