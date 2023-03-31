import React from 'react'
import './Skills.css'

const frontendSkills = [
  {
    title: 'HTML5/CSS'
  },
  {
    title: 'JavaScript/TypeScript'
  },
  {
    title: 'React'
  },
  {
    title: 'Redux/Redux Toolkit'
  },
  {
    title: 'Next.Js'
  },
  {
    title: 'Node.Js'
  },
  {
    title: 'Express'
  },
  {
    title: 'Git & Github'
  },
  {
    title: 'CI/CD'
  },
  {
    title: 'AWS'
  },
  {
    title: 'Docker'
  },
  {
    title: 'Python'
  }
]
const backendSkills = [
  {
    title: 'TailwindCSS/Bootstrap'
  },
  {
    title: 'MUI'
  },
  {
    title: 'Figma'
  },
  {
    title: 'MongoDB'
  },
  {
    title: 'Strapi'
  },
  {
    title: 'Firebase'
  },

  {
    title: 'REST API'
  },
  {
    title: 'SQL'
  },
  {
    title: 'NoSQL'
  },
  {
    title: 'Jest'
  },
  {
    title: 'Render'
  },
  {
    title: 'Postman'
  }
]
const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
      <div className="frontend_skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem key={index} title={item.title} />
        ))}
      </div>

      <div className="backend_skill w-50">
        {backendSkills.map((item, index) => (
          <SkillItem key={index} title={item.title} />
        ))}
      </div>
    </div>
  )
}

const SkillItem = ({ title }) => {
  return (
    <div className="skill_data mb-3">
      <div className="skill_title d-flex align-itmes-center">
        <h6>{title}</h6>
      </div>
      <div className="skill_bar"></div>
    </div>
  )
}

export default Skills
