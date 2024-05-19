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

  return (<>
    <h1 className='SelectMessage  pl-7 pr-7  bg-[#cbd5fe] text-[#0056b3] h-28 text-2xl font-sans rounded-b-xl flex items-center justify-center'>Select A Template</h1>

    <div className='SelectTemp w-[80%] h-[80vh] rounded-3xl mb-9' >

      <div className="Templates w-[100%] h-[100%] bg-white/40 backdrop-blur-sm rounded-3xl flex flex-col gap-20 items-center justify-center">
        <div className="tempBox flex flex-wrap gap-7">
          <Link to={'/resume1'}>
             <div className="ResumesS">
              <img src={Resume1} className='img1 ease-in duration-150' alt="" />
              <div className="BlackishBackground"></div>
             </div> 
          </Link>
          <Link to={'/resume2'}><img src={Resume2} alt="" className='ease-in duration-150' />  </Link>
          <Link to={'/resume'}><img src={Resume3} alt="" className='ease-in duration-150' />  </Link>
          <Link to={'/resume'}><img src={Resume4} alt="" className='ease-in duration-150' />  </Link>
        </div>
      </div>

    </div>
  </>
  )
}

export default SelectTemp
