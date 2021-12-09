import React from "react";

function Skills({ data }) {
  return (
    <div>
      <h3> {data.title}</h3>
      <table className="table">
        <tbody>
          {data.description.map((sk, index) => (
            <tr key={index}>
              <td>
                <span style={{ fontWeight: "700" }}>{sk.name}</span>
              </td>
              <td>
                <div className={sk.rating > 0 ? "ratings" : "noRate"}></div>
                <div className={sk.rating > 1 ? "ratings" : "noRate"}></div>
                <div className={sk.rating > 2 ? "ratings" : "noRate"}></div>
                <div className={sk.rating > 3 ? "ratings" : "noRate"}></div>
                <div className={sk.rating > 4 ? "ratings" : "noRate"}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Skills;
