import React from "react";
import "./Volunteer.css";

const Volunteer = () => {
  return (
    <div className="volunteer_container d-flex flex-wrap align-items-center">
      <div className="volunteer_item">
        <VolunteerItem
          year="03.2021 - Present"
          title="COMMUNITY VISITORS SCHEME"
          text="Established and strengthened links between people live in aged care homes
          Provided an ongoing friendship with a socially isolated older person."
        />
      </div>
    </div>
  );
};

const VolunteerItem = ({ year, title, text }) => {
  return (
    <div className="single_volunteer">
      <div className="volunteer_year">{year}</div>
      <h6 className="volunteer_title">
        {title} - <span>{text}</span>
      </h6>
    </div>
  );
};

export default Volunteer;
