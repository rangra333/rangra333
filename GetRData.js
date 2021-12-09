import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";

const element = <FontAwesomeIcon icon={faEnvelope} />;
const location = <FontAwesomeIcon icon={faMapMarker} />;

function GetRData({ data }) {
  return (
    <div>
      <h2> {data.name}</h2>
      <div className="underline"></div>
      <div className="container">
        <div className="row" style={{ paddingLeft: "0px" }}>
          <div className="col">
            <table className="table details" style={{ border: "none" }}>
              <tbody>
                <tr>
                  <td colSpan="2" style={{ borderBottom: "1px solid #ccc" }}>
                    <h4>{data.role}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <span className="telephone" />
                    </div>
                  </td>
                  <td>{data.mobile}</td>
                </tr>
                <tr>
                  <td>{element}</td>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <td>{location}</td>
                  <td>{data.location}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col" style={{ float: "right", border: "none" }}>
            <table className="table details">
              <tbody>
                <tr>
                  <td colSpan="2" style={{ borderBottom: "1px solid #ccc" }}>
                    <h4 style={{ textAlign: "right" }}>Experience</h4>
                  </td>
                </tr>
                {data.experience.map((exp) => (
                  <tr>
                    <td>
                      <b>{exp.type}</b>
                    </td>
                    <td> {exp.years}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="underline" style={{ paddingLeft: "0px" }}></div>
          <div style={{ textAlign: "center" }}>
            <FaLinkedin size="23px" /> - {data.linkedin}
          </div>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
}

export default GetRData;
