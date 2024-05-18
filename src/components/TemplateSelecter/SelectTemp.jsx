import React from 'react'
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker.jsx'
import { Link } from 'react-router-dom'
import Resume1 from '../../assets/Resume1.png';
import Resume2 from '../../assets/Resume2.png';
import Resume3 from '../../assets/Resume3.png';
import Resume4 from '../../assets/Resume4.png';

import './SelectTemp.css'
// import Resume1 from '../Resumes/Resume1/Resume1.jsx';

function SelectTemp({ personalInfo, education, experience, skills }) {
  
  return (
    <div className='SelectTemp'>
      <h1>Select A Template</h1>

    <div className="Templates">
      
      <Link to={'/resume1'}> <img src={Resume1} className='img1' alt="" />  </Link>
      <Link to={'/resume2'}><img src={Resume2} alt="" />  </Link>
      <Link to={'/resume'}><img src={Resume3} alt="" />  </Link>
      <Link to={'/resume'}><img src={Resume4} alt="" />  </Link>  

    </div>

    </div>
  )
}

export default SelectTemp
