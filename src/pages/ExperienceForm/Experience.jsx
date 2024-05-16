import React, { useState } from 'react';
import './Experience.css'

const ExperienceForm = ({experience, setExperience}) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  };

  return (
    <div className='ExperienceOfUser'>
      <h1>Experience</h1>
      <form>
        <div className='InputField' >
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={experience.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div  className='InputField'>
          <label>Start Date:</label>
          <input
            type="text"
            name="startDate"
            value={experience.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div  className='InputField'>
          <label>End Date:</label>
          <input
            type="text"
            name="endDate"
            value={experience.endDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>Description:</label>
          <textarea
            name="description"
            value={experience.description}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add other input fields such as achievements, responsibilities, etc. */}
      </form>
    </div>
  );
};

export default ExperienceForm;
