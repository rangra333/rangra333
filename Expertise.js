import React from "react";

function Expertise({ data }) {
  return (
    <div>
      <h3>{data.title} </h3>
      {data.description.map((exp) => (
        <div className="expertise">{exp}</div>
      ))}
    </div>
  );
}

export default Expertise;
