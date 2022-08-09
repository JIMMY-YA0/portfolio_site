import React from "react";
import "./Skills.css";

const frontendSkills = [
  {
    title: "Html5",
    percentage: "100%",
  },
  {
    title: "JavaScript",
    percentage: "100%",
  },
  {
    title: "React.js",
    percentage: "100%",
  },
  {
    title: "Redux/Redux Toolkit",
    percentage: "100%",
  },
  {
    title: "Git & Github",
    percentage: "100%",
  },
];
const backendSkills = [
  {
    title: "CSS3",
    percentage: "100%",
  },
  {
    title: "TailwindCSS/Bootstrap",
    percentage: "100%",
  },
  {
    title: "Rest API",
    percentage: "100%",
  },
  {
    title: "Firebase",
    percentage: "100%",
  },
  {
    title: "MySQL",
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

      <div className="skill_bar ">
        <span className="skill_bar-percentage" style={{ width: `${percentage}` }}></span>
      </div>
    </div>
  );
};

export default Skills;
