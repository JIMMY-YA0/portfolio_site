import React from "react";
import "./Skills.css";

const frontendSkills = [
  {
    title: "HTML5/CSS",
    percentage: "100%",
  },
  {
    title: "JavaScript/TypeScript",
    percentage: "100%",
  },
  {
    title: "React",
    percentage: "100%",
  },
  {
    title: "Redux/Redux Toolkit",
    percentage: "100%",
  },
  {
    title: "Next.Js",
    percentage: "100%",
  },
  {
    title: "Node.Js",
    percentage: "100%",
  },
  {
    title: "Git & Github",
    percentage: "100%",
  },
  {
    title: "CI/CD",
    percentage: "100%",
  },
  {
    title: "AWS",
    percentage: "100%",
  },
  {
    title: "Docker",
    percentage: "100%",
  },
  {
    title: "Python",
    percentage: "100%",
  },
];
const backendSkills = [
  {
    title: "TailwindCSS/Bootstrap",
    percentage: "100%",
  },
  {
    title: "MUI",
    percentage: "100%",
  },
  {
    title: "Figma",
    percentage: "100%",
  },
  {
    title: "MongoDB",
    percentage: "100%",
  },
  {
    title: "Strapi",
    percentage: "100%",
  },
  {
    title: "Firebase",
    percentage: "100%",
  },

  {
    title: "REST API",
    percentage: "100%",
  },
  {
    title: "SQL",
    percentage: "100%",
  },
  {
    title: "NoSQL",
    percentage: "100%",
  },
  {
    title: "Jest",
    percentage: "100%",
  },
  {
    title: "Render",
    percentage: "100%",
  },
];
const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
      <div className="frontend_skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem key={index} title={item.title} percentage={item.percentage} />
        ))}
      </div>

      <div className="backend_skill w-50">
        {backendSkills.map((item, index) => (
          <SkillItem key={index} title={item.title} percentage={item.percentage} />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill_data mb-3">
      <div className="skill_title d-flex align-itmes-center">
        <h6>{title}</h6>
      </div>

      <div className="skill_bar">
        <span className="skill_bar-percentage" style={{ width: `${percentage}` }}></span>
      </div>
    </div>
  );
};

export default Skills;
