import React from "react";
import "./Skills.css";

const frontendSkills = [
  {
    title: "JavaScript",
    percentage: "85%",
  },
  {
    title: "React.js",
    percentage: "85%",
  },
  {
    title: "Redux",
    percentage: "85%",
  },
  {
    title: "Next.js",
    percentage: "85%",
  },
];
const backendSkills = [
  {
    title: "Node.js",
    percentage: "85%",
  },
  {
    title: "Express.js",
    percentage: "85%",
  },
  {
    title: "MongoDB",
    percentage: "85%",
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
      <div className="skill_title d-flex align-itmes-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>

      <div className="skill_bar ">
        <span className="skill_bar-percentage" style={{ width: `${percentage}` }}></span>
      </div>
    </div>
  );
};

export default Skills;
