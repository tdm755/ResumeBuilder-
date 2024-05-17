import React, { useState } from 'react'
import './ColorPicker.css'

import { useContext } from 'react';

function ColorPicker({colorOfTem, setColorOfTem}) {   

    function handleChange(e) {
        setColorOfTem(e.target.value)
    }

  return (
    
    <div className='ColorPicker'>
        
        <div className="colorDisplay" style={{border :`2px solid ${colorOfTem}`}}> 
           <p><span style={{backgroundColor : colorOfTem}}></span> {colorOfTem}</p>
            <input type="color" onChange={handleChange} />
        </div>
      
    </div>
  )
}

export default ColorPicker
