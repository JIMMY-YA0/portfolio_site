import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bachelor</td>
          <td>Computer Science</td>
          <td>The University of Adelaide</td>
          <td> 2017 - 2020</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
