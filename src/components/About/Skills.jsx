import React from 'react'
import './Skills.css'

const SkillLeft = [
  {
    title: 'HTML5/CSS'
  },
  {
    title: 'JavaScript'
  },
  {
    title: 'TypeScript'
  },
  {
    title: 'React'
  },
  {
    title: 'Redux'
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
const SkillRight = [
  {
    title: 'TailwindCSS'
  },
  {
    title: 'Bootstrap'
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
        {SkillLeft.map((item, index) => (
          <SkillItem key={index} title={item.title} />
        ))}
      </div>

      <div className="backend_skill w-50">
        {SkillRight.map((item, index) => (
          <SkillItem key={index} title={item.title} />
        ))}
      </div>
    </div>
  )
}

const SkillItem = ({ title }) => {
  return (
    <div className="skill_data mb-3">
      <div className="skill_title inline-block align-itmes-center ">
        <h6>{title}</h6>
      </div>
      <div className="skill_bar"></div>
    </div>
  )
}

export default Skills
