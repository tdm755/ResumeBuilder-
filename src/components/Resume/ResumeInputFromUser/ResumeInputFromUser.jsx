import React from 'react'
import EducationForm from '../../../pages/Education/Education';
import PersonalInfoForm from '../../../pages/PersonalInfoForm/PersonalInfo';
import ExperienceForm from '../../../pages/ExperienceForm/Experience';
import SkillsForm from '../../../pages/SkillsForm/Skill';
import './ResumeInputFromUser.css'

function ResumeInputFromUser({ personalInfo, education, experience, skills, setPersonalInfo, setEducation, setExperience, setSkills}) {
  return (
    <div className='ResumeInputFromUser'>
                 <PersonalInfoForm
                  personalInfo={personalInfo}
                  setPersonalInfo={setPersonalInfo}
                  />
                <ExperienceForm
                  experience={experience}
                  setExperience={setExperience}
                  />
                <EducationForm
                  education={education}
                  setEducation={setEducation}
                  />
                <SkillsForm skills={skills} setSkills={setSkills} />
    </div>
  )
}

export default ResumeInputFromUser
