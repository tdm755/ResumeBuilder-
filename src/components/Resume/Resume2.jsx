import React from 'react'

const Resume2 = ({ personalInfo, education, experience, skills }) => (
    <div className="resume-template">
      <div className="header">
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.email} | {personalInfo.phone}</p>
      </div>
      <div className="section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution} | {edu.graduationYear}</p>
          </div>
        ))}
      </div>
      <div className="section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.company} | {exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );

export default Resume2
