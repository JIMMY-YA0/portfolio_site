import React from 'react'
import './experience.css'
import { Container, Row, Col } from 'reactstrap'

const Experience = () => {
  const experiences = [
    {
      date: 'Feb 2023 - Present',
      title: 'Full Stack Developer',
      company: 'Code.Sydney',
      location: 'Sydney, NSW',
      descriptions: [
        'Collaborated with a small team of developers to deliver a web-based platform that connects local volunteers with non-profit organizations in need of skilled workers using Git version control and Trello for project management.',
        'Designed and developed responsive and user-friendly front-end interfaces using HTML, JavaScript, TailwindCSS, and React.',
        'Designed and implemented the backend architecture of the platform using Node.js, Express, and MongoDB, following the MVC pattern and RESTful principles.',
        'Implemented APIs to perform CRUD operations on different types of data entities such as candidates, profiles, recruiters, or job postings.'
      ]
    },
    {
      date: 'Nov 2022 - Feb 2023',
      title: 'Front End Developer Intern',
      company: 'OutZ',
      location: 'Adelaide, SA',
      descriptions: [
        'Worked on a greenfield project from scratch, following Scrum methodologies and best practices.',
        'Developed scalable and performant eCommerce web applications for an external client using modern web technologies such as TypeScript, React, Redux, Next.js and Mui.',
        'Collaborated closely with UX/UI designers using Figma to create user-friendly and responsive interfaces, following agile methodologies and best practices of CSS Grid and Flexbox.',
        'Worked with the development team to integrate front-end with backend API using Axios and GraphQL, ensuring data consistency and reliability across the web applications.',
        'Debugged and tested front-end code using Chrome DevTools, Jest and Cypress, and utilized Git for version control and code collaboration, and used Jira for project management and issue tracking.'
      ]
    }
  ]

  return (
    <section id="experience">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experience</h2>
          </Col>
          <Col lg="12">
            <div className="single_experience-container">
              {experiences.map((experience, index) => (
                <div key={index} className="single_experience">
                  <span className="experience_icon">
                    <i className="ri-briefcase-line"></i>
                  </span>
                  <h5>{experience.title}</h5>
                  <h6>
                    {experience.company} • {experience.location}
                  </h6>
                  <h6>{experience.date}</h6>

                  {experience.descriptions.map((description, i) => (
                    <p key={i} className="bullet-point">
                      {description}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience
