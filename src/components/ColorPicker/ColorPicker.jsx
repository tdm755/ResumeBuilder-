import React, { useState } from 'react'
import './ColorPicker.css'
import { useContext } from 'react';


function ColorPicker(props) {   

    function handleChange(e) {
        props.setColorOfTem(e.target.value)
        
    }

  return (
    
    <div className='ColorPicker'>
        
        <div className="colorDisplay" style={{border :`1px solid ${props.colorOfTem}`}}> 
           <p><span style={{backgroundColor : props.colorOfTem}}></span> {props.colorOfTem}</p>
            <input type="color" onChange={handleChange} />
        </div>
      
    </div>
  )
}

export default ColorPicker
