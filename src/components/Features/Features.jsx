import React from 'react'
import './Features.css'


function Features(props) {
  return (
    <div className='Feature' style={{flexDirection : `${props.direction}`}}>
         <div className="leftsideF">

            <div className="top" style={{justifyContent : `${props.flex}`}}>
                    <div className="Num" style={{backgroundColor : `${props.bgColor}`}}>
                        
                        <span>{props.Num}</span>
                    </div>
            </div>

            <div className="bottomSideF" data-aos="fade-right">
                    <div className="featureName" style={{backgroundColor : `${props.Num/2 == 0 && '#ebe6f3'}`}}>
                        <h4>{props.featTitle}</h4>
                        <p>{props.featDescription}</p>
                    </div>
            </div>

         </div>
         <div className="rightSideF" style={{ backgroundImage: `url(${props.bgimage})`, backgroundColor : `${props.bgColor}`}} data-aos="fade-left">
             
         </div>
    </div>
  )
}

export default Features
