import React from "react";

function Tool({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      {data.description.map((tool) => (
        <div className="expertise">{tool}</div>
      ))}
    </div>
  );
}

export default Tool;
