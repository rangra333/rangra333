import React from "react";

function Methodology({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      {data.description.map((met) => (
        <div className="expertise">{met}</div>
      ))}
    </div>
  );
}

export default Methodology;
