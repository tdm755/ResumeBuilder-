import React, { useEffect, useState } from 'react'
import './Resume4.css'

function Resume4({ personalInfo, education, experience, skills, colorOfTem, setColorOfTem, imgP }) {


        const [imageSrc, setImageSrc] = useState('');

        const handleImageChange = (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
          }
        };


   const profileImageStyle = {
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // width: '200px', 
      // height: '200px', 
};


  return (
    <>

    {/* <div className="InsertImage"> */}
         <div className='InputField'>
          {/* <label>Image:</label> */}
          <input type="file" name="image" accept="image/jpeg, imgage/jpg, image/png" onChange={(e)=>handleImageChange(e)} required />
        </div>
    {/* </div> */}

    <div class="resume4">
      <div class="leftSide4">
        <div class="ProfileImage4" style={profileImageStyle}>

        </div>
        <div class="Profile">
          <h1>Profile</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iure, vitae ipsam, explicabo, nostrum iste veniam laborum repellat animi excepturi quod ipsa sunt est odit autem consectetur harum iusto incidunt.</p>
        </div>
        <div className="contSec">
          <h3 className='right'>Contact Info</h3>
          <div className="contactSec2">
            <ul>
              <p>Mob : {personalInfo.phone}</p>
              <p>Email : <a href={`mailto:${personalInfo.email}`} style={{ fontWeight: '600' }}>{personalInfo.email}</a></p>
              <p>LinkedIn :<a href={personalInfo.LinkedIn} target="blank" style={{ fontWeight: '600' }}>LinkedIn</a> </p>
              <p>GitHub :<a href={personalInfo.LinkedIn} target="blank" style={{ fontWeight: '600' }}>GitHub</a> </p>
              {personalInfo.address === "" && <p>{personalInfo.address}</p>}

            </ul>
          </div>

        </div>
        <div class="Hobbies4">
          <h1 className='right'>Hobbies</h1>
          <ul>
            <li>English Speaking</li>
            <li>Communication</li>
            <li>Cricket</li>
            <li>Kuch Nahi</li>
          </ul>
        </div>
      </div>
      <div class="rightSide4">
        <div class="intro4">
          <h1 className='text-6xl'>Arpit Tiwari</h1>
          <span className='text-2xl'>frontEnd Developer</span>
        </div>
        <div className="education">
          <h3 className="right">EDUCATION</h3>
          <div className="ExpeItems">
            {education.map((item, index) => {
              return <div key={index} className={`item item${index}`}>
                <h4>
                  <p className="years">{item.degree} At {item.institution}</p>
                  <p className="TimePeriod"> <span>{item.graduationStartYear}</span> <span>-{item.graduationEndYear}</span></p>
                </h4>
                <p className="descriptionEdu"><span className="sideLine"></span>{item.description}</p>
                {item.Score !== "" && <span>Score : {item.Score}</span>}
              </div>
            })}
          </div>
        </div>
        <div className="experience">
          <h3 style={{ backgroundColor: colorOfTem }}>Experience</h3>
          <div className="ExpeItems">
            {experience.map((item, index) => {
              return <div key={index} className={`item item${index}`}>
                <h4>
                  <p className="text-base">{item.title} At {item.company}</p>
                  <p className="TimePeriod"> <span>{item.startDate}</span> <span>-{item.endDate}</span></p>
                </h4>
                <p className="descriptionEx"><span className="sideLine"></span>{item.description}</p>
              </div>
            })}
          </div>
        </div>
        <div className="skillsSection">
          <h3 className="right">SKILLS</h3>
          <ul>
            {skills.map((item) => {
              return <li className='text-xl'>{item}</li>;
            })}
          </ul>
        </div>        

      </div>
    </div>
    </>
  )
}

export default Resume4
