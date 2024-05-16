import React, { useState } from 'react'
import './ColorPicker.css'

function ColorPicker() {

    const [color, setColor] = useState("#42CEAE");


    function handleChange(e) {
        setColor(e.target.value)
    }

  return (
    <div className='ColorPicker'>
        <div className="message">
            <h1>Select A Template</h1>
            <p>Select A Color Theme For Your Resume</p>
        </div>
        <div className="colorDisplay" style={{border :`2px solid ${color}`}}> 
           <p><span style={{backgroundColor : color}}></span> {color}</p>
            <input type="color" onChange={handleChange} />
        </div>
      
    </div>
  )
}

export default ColorPicker
