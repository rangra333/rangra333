import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faCalendar,
  faStar,
  faGraduationCap,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const university = <FontAwesomeIcon icon={faUniversity} />;
const calander = <FontAwesomeIcon icon={faCalendar} />;
const rating = <FontAwesomeIcon icon={faStar} />;
const degree = <FontAwesomeIcon icon={faGraduationCap} />;
const specialization = <FontAwesomeIcon icon={faDesktop} />;

function Education({ _ }) {
  return (
    <div className="p-2">
      <h3>{_.title}</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <b>{university} Institution </b>
            </td>
            <td>
              <span>{_.description[0].institution}</span>
            </td>
          </tr>
          <tr>
            <td>
              <b>{calander} Year </b>
            </td>
            <td>
              <span>{_.description[0].years}</span>
            </td>
          </tr>
          <tr>
            <td>
              <b>{rating} Grade </b>
            </td>
            <td>
              <span>{_.description[0].grade}</span>
            </td>
          </tr>
          <tr>
            <td>
              <b>{degree} Degree </b>
            </td>
            <td>
              <span>{_.description[0].degree}</span>
            </td>
          </tr>
          <tr>
            <td>
              <b>{specialization} Specialisation </b>
            </td>
            <td>
              <span>{_.description[0].specialization}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Education;
