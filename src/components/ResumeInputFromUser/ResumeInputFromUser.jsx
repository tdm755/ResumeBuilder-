import React, { useState } from 'react';
import EducationForm from '../../pages/Education/Education.jsx'
import PersonalInfoForm from '../../pages/PersonalInfoForm/PersonalInfo.jsx';
import ExperienceForm from '../../pages/ExperienceForm/Experience.jsx';
import SkillsForm from '../../pages/SkillsForm/Skill'
import './ResumeInputFromUser.css';
import { Link } from 'react-router-dom';

function ResumeInputFromUser({ personalInfo, education, experience, skills, setPersonalInfo, setEducation, setExperience, setSkills }) {
  


  const addEducationSection = () => {
    setEducation((preVal)=>{
      return [...preVal, {
        degree: "MBA",
        institution: "Bal Bharti Public School",
        graduationStartYear: "2021",
        graduationEndYear: "2024",
        Score : "",
        description: "Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.",
      }]
    });
  };

  const addExperienceSection = () => {
    setExperience((preVal)=>{
      return [...preVal, {
        title: "Frontend Web Developer",
        company: "Geek Rider",
        startDate: "May 15",
        endDate: "Aug 15",
        description: "Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.",
      }]
    });
  };



  return (
    <>
    <div className='ResumeInputFromUser'>
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

      <div className="educationbar">
          <EducationForm
            education={education}
            setEducation={setEducation}
          /> 
        
          <div className="add-section">
            <button onClick={addEducationSection}>Add Education Section</button>
          </div>
      </div>

      <div className="experiencebar">
          <ExperienceForm
            experience={experience}
            setExperience={setExperience}
          />
      
          <div className="add-section">
            <button onClick={addExperienceSection}>Add Experience Section</button>
          </div>
      </div>


      <SkillsForm
        skills={skills}
        setSkills={setSkills}
      />
    </div>
    <Link to={"/template"}>
        <button className="CreatingResume">
          Preview
        </button>
      </Link>

    </>
    
  );
}


export default ResumeInputFromUser;
