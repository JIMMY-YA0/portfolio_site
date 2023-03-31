import React from 'react'
import './Volunteer.css'

const Volunteer = () => {
  return (
    <div className="volunteer_container d-flex flex-wrap align-items-center">
      <div className="volunteer_item">
        <VolunteerItem
          year="03.2021 - 10.2022"
          title="COMMUNITY VISITORS SCHEME"
          text="Established and strengthened links between people living in aged care homes. 
          Collaborate with different volunteers and staff to organise various activities for the elderly."
        />
      </div>
    </div>
  )
}

const VolunteerItem = ({ year, title, text }) => {
  return (
    <div className="single_volunteer">
      <div className="volunteer_year">{year}</div>
      <h6 className="volunteer_title">
        {title} - <span>{text}</span>
      </h6>
    </div>
  )
}

export default Volunteer
