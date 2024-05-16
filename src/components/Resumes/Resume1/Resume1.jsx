import React from "react";
import "./Resume.css";

const Resume1 = ({ personalInfo, education, experience, skills }) => (
  <div className="resume_template">
    <div className="header">
      <h1>{personalInfo.name}</h1>
      <div className="ContactInfo">
        <p>
          {personalInfo.email} | {personalInfo.phone}
        </p>
        <p>{personalInfo.address}</p>
      </div>
    </div>
    <hr />

    <div className="rightSide">
      <div className="leftSide">

        <div className="section">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="EducationSection">
        <h2>Education</h2>
        <div>
          <h3>{education.degree}</h3>
          <p>
            {education.institution} | {education.graduationYear}
          </p>
        </div>
      </div>
      <div className="ExperienceSection">
        <h2>Experience</h2>
        <div>
          <h3>{experience.title}</h3>
          <p>
            {experience.company} | {experience.startDate} - {experience.endDate}
          </p>
          <p>{experience.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Resume1;
