import React from "react";
import Projects from "./Projects";

function CompanyDetails({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      {data.companyList.map((compLst, index) => (
        <div key={index}>
          <div
            style={{
              maxWidth: "50%",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            <h4>{compLst.name}</h4>
          </div>
          <div
            style={{ display: "inline-block", maxWidth: "50%", float: "right" }}
          >
            <div>
              <b>{compLst.role}</b> - {compLst.years}
            </div>
            <div>
              <b>Experience Years</b> - {compLst.expYears}
            </div>
          </div>
          <br />
          <Projects proj={compLst.projects} />
        </div>
      ))}
    </div>
  );
}
export default CompanyDetails;
