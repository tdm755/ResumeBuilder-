import React, { useState } from 'react';
import './PersonalInfo.css'


const PersonalInfoForm = ({personalInfo, setPersonalInfo, imgP, setImgP}) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };


  function handleImageChange(e) {
    // console.log(e.target.value);
    setImgP(e.target.value)
  }

  return (
    <div className='PersonalInformationOfTheCandidate'>
      <h1>Personal Information</h1>
      <form>
        <div className='InputField'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className='InputField'>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            accept="image/jpeg, imgage/jpg, image/png"
            onChange={(e)=>handleImageChange(e)} 
            required
          />
        </div> */}
        <div className='InputField'>
          <label>WorkingAs:</label>
          <input
            type="text"
            name="WorkingAs"
            value={personalInfo.WorkingAs}
            onChange={handleInputChange}
            required
          />
          </div>
        <div className='InputField'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={personalInfo.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>LinkedIn:</label>
          <input
            type="text"
            name="LinkedIn"
            value={personalInfo.LinkedIn}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>GitHub:</label>
          <input
            type="text"
            name="GitHub"
            value={personalInfo.GitHub}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='InputField'>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add other input fields such as LinkedIn, GitHub, etc. */}
      </form>
    </div>
  );
};

export default PersonalInfoForm;
