import React from "react";
import "./Skills.css";

const frontendSkills = [
  {
    title: "Html5",
    percentage: "90%",
  },
  {
    title: "JavaScript",
    percentage: "75%",
  },
  {
    title: "React.js",
    percentage: "80%",
  },
  {
    title: "Redux",
    percentage: "70%",
  },
  {
    title: "Git & Github",
    percentage: "73%",
  },
];
const backendSkills = [
  {
    title: "CSS3",
    percentage: "90%",
  },
  {
    title: "Bootstrap",
    percentage: "80%",
  },
  {
    title: "TailwindCSS",
    percentage: "85%",
  },
  {
    title: "Firebase",
    percentage: "70%",
  },
  {
    title: "MySQL",
    percentage: "65%",
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
