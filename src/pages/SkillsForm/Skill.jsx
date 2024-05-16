import React, { useState } from 'react';
import './Skill.css';

const SkillsForm = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className='SkillOfUser'>
      <h1>Skills</h1>
      <div>
        {skills.map((skill, index) => (
          <div key={index} className='InputField'>
            <label>{`Skill ${index + 1}:`}</label>
            <input
              type='text'
              value={skill}
              onChange={(e) => {
                const updatedSkills = [...skills];
                updatedSkills[index] = e.target.value;
                setSkills(updatedSkills);
              }}
              required
            />
            <button onClick={() => removeSkill(index)}>Remove</button>
          </div>
        ))}
        <div className='InputField'>
          <input
            type='text'
            value={newSkill}
            onChange={handleInputChange}
            placeholder='Add new skill'
          />
          <button onClick={addSkill}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
