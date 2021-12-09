import React from "react";

function Certifications({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <ul>
        {data.description.map((cert) => (
          <li>{cert}</li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
