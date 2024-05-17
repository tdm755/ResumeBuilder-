import React from 'react'
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker.jsx'
import { Link } from 'react-router-dom'
import resumeImg from '../../assets/Resume.png';
import Resume2Image from '../../assets/Resume2.png'

import './SelectTemp.css'
import Resume1 from '../Resumes/Resume1/Resume1.jsx';

function SelectTemp({ personalInfo, education, experience, skills }) {
  
  return (
    <div className='SelectTemp'>
      <h1>Select A Template</h1>

    <div className="Templates">
      
      <Link to={'/resume'}> <img src={Resume2Image} alt="" />  </Link>
      <Link to={'/resume2'}><img src={resumeImg} alt="" />  </Link>
      <Link to={'/resume'}><img src={resumeImg} alt="" />  </Link>
      <Link to={'/resume'}><img src={resumeImg} alt="" />  </Link>  

    </div>

    </div>
  )
}

export default SelectTemp
