import React, { useState } from "react";
import './Education.css'

const EducationForm = ({education, setEducation}) => {

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  return (
    <div className="EducationOfStudents">
      <h1>Education</h1>
      <form>
        <div className="InputField">
          <label>Degree:</label>
          <input
            type="text"
            name="degree"
            value={education.degree}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InputField">
          <label>Institution:</label>
          <input
            type="text"
            name="institution"
            value={education.institution}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InputField">
          <label>Graduation Start Year:</label>
          <input
            type="text"
            name="graduationStartYear"
            value={education.graduationStartYear}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="InputField">
          <label>Graduation End Year:</label>
          <input
            type="text"
            name="graduationEndYear"
            value={education.graduationEndYear}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InputField">
          <label>Score:</label>
          <input
            type="text"
            name="Score"
            value={education.Score}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InputField">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={education.description}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add other input fields such as GPA, field of study, etc. */}
      </form>
    </div>
  );
};

export default EducationForm;
