import React from "react";

function Projects({ proj }) {
  return (
    <div>
      {proj.map((pr) => (
        <div style={{ marginLeft: "1rem" }}>
          <h5>{pr.name}</h5>
          <ul>
            {pr.description.map((desc) => (
              <li>
                <div>{desc}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;
