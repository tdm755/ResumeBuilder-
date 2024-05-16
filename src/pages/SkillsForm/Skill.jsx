import React, { useState } from 'react';
import './Skill.css'

const SkillsForm = ({skills, setSkills}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkills({
      ...skills,
      [name]: value,
    });
  };

  return (
    <div className='SkillOfUser'>
      <h1>Skills</h1>
      <form>
        <div className='InputField'>
          <label>Skill 1:</label>
          <input
            type="text"
            name="skill1"
            value={skills.skill1}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>Skill 2:</label>
          <input
            type="text"
            name="skill2"
            value={skills.skill2}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>Skill 3:</label>
          <input
            type="text"
            name="skill3"
            value={skills.skill3}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more input fields for additional skills */}
      </form>
    </div>
  );
};

export default SkillsForm;
