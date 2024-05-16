import React, { useState } from 'react';
import EducationForm from '../../../pages/Education/Education';
import PersonalInfoForm from '../../../pages/PersonalInfoForm/PersonalInfo';
import ExperienceForm from '../../../pages/ExperienceForm/Experience';
import SkillsForm from '../../../pages/SkillsForm/Skill';
import './ResumeInputFromUser.css';

function ResumeInputFromUser({ personalInfo, education, experience, skills, setPersonalInfo, setEducation, setExperience, setSkills }) {
  const [additionalEducationSections, setAdditionalEducationSections] = useState([]);
  const [additionalExperienceSections, setAdditionalExperienceSections] = useState([]);

  const addEducationSection = () => {
    setAdditionalEducationSections([...additionalEducationSections, {
      degree: '',
      institution: '',
      graduationYear: ''
    }]);
  };

  const addExperienceSection = () => {
    setAdditionalExperienceSections([...additionalExperienceSections, {
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const handleEducationChange = (index, updatedEducation) => {
    const updatedSections = [...additionalEducationSections];
    updatedSections[index] = updatedEducation;
    setAdditionalEducationSections(updatedSections);
  };

  const handleExperienceChange = (index, updatedExperience) => {
    const updatedSections = [...additionalExperienceSections];
    updatedSections[index] = updatedExperience;
    setAdditionalExperienceSections(updatedSections);
  };

  const removeEducationSection = (index) => {
    const updatedSections = [...additionalEducationSections];
    updatedSections.splice(index, 1);
    setAdditionalEducationSections(updatedSections);
  };

  const removeExperienceSection = (index) => {
    const updatedSections = [...additionalExperienceSections];
    updatedSections.splice(index, 1);
    setAdditionalExperienceSections(updatedSections);
  };

  return (
    <div className='ResumeInputFromUser'>
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <EducationForm
        education={education}
        setEducation={setEducation}
      />
      {/* Additional Education Sections */}
      {additionalEducationSections.map((educationData, index) => (
        <div key={index}>
          <EducationForm
            education={educationData}
            setEducation={(updatedEducation) => handleEducationChange(index, updatedEducation)}
          />
          <button onClick={() => removeEducationSection(index)}>Remove Education Section</button>
        </div>
      ))}
      <div className="add-section">
        <button onClick={addEducationSection}>Add Education Section</button>
      </div>
      <ExperienceForm
        experience={experience}
        setExperience={setExperience}
      />
      {/* Additional Experience Sections */}
      {additionalExperienceSections.map((experienceData, index) => (
        <div key={index}>
          <ExperienceForm
            experience={experienceData}
            setExperience={(updatedExperience) => handleExperienceChange(index, updatedExperience)}
          />
          <button onClick={() => removeExperienceSection(index)}>Remove Experience Section</button>
        </div>
      ))}
      <div className="add-section">
        <button onClick={addExperienceSection}>Add Experience Section</button>
      </div>
      <SkillsForm
        skills={skills}
        setSkills={setSkills}
      />
    </div>
  );
}

export default ResumeInputFromUser;
