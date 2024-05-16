import React from 'react'
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker.jsx'
import { Link } from 'react-router-dom'
import resumeImg from '../../assets/Resume.png';
import './SelectTemp.css'
import Resume1 from '../Resumes/Resume1/Resume1.jsx';

function SelectTemp({ personalInfo, education, experience, skills }) {
  
  return (
    <div className='SelectTemp'>
      <h1>Select A Template</h1>

    <div className="Templates">
      
      <Link to={'/resume'}> <div className="template1"><Resume1 personalInfo={personalInfo} education={education} experience={experience} skills={skills} /></div>  </Link>
      <Link to={'/resume'}><img src={resumeImg} alt="" />  </Link>
      <Link to={'/resume'}><img src={resumeImg} alt="" />  </Link>
      <Link to={'/resume'}><img src={resumeImg} alt="" />  </Link>  

    </div>

    </div>
  )
}

export default SelectTemp
