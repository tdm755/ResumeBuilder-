import React, { useEffect, useRef } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from "react";
import "./Resume2.css";
import ColorPicker from "../../ColorPicker/ColorPicker.jsx";
import FontSelector from "../../FontSelector/FontSelector.jsx";
import { downloadPDF } from "../Download.js";

function Resume2({ personalInfo, education, experience, skills, colorOfTem, setColorOfTem }) {
  
  const linkRef = useRef(null);



  return (<div className="FlexReverse">

  <div className="ColorFonts">
      <FontSelector />
      <ColorPicker colorOfTem={colorOfTem} setColorOfTem={setColorOfTem} />
      <button className="DownloadPdf" onClick={()=>{downloadPDF("resume-template2")}}>Download PDF</button>
  </div>

  <hr />

    <div className="ToDownLoadFlex">   
    
     <div id="resume-template2" className="resume_template2">

        <div className="leftSide2" style={{ backgroundColor: colorOfTem }}>         

          {/* <div style={{ backgroundColor: colorOfTem }} className="sideDesign"></div> */}
          {/* <div className="asidebar"> */}
            <div className="skillSec2">
              <h3>Skills</h3>
              <ul>
                {skills.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>

            <div className="Education2">
              <h3>Education</h3>
              <div className="ExpeItems">
                {education.map((item, index) => {
                  return <div key={index} className={`item item${index}`}>
                    <h4>
                      <p className="years">{item.degree} At {item.institution}</p>
                      <p className="TimePeriod"> <span>{item.graduationStartYear}</span> <span>-{item.graduationEndYear}</span></p>
                    </h4>
                    <p className="descriptionEdu">{item.description}</p>
                    {item.Score !== "" && <span>Score : {item.Score}</span>}
                  </div>
                })}
              </div>
            </div>
            
            <div className="contactSec2">
              <h3>Contact Info</h3>
              <p>Mob : {personalInfo.phone}</p>
              <p>Email : <a href={`mailto:${personalInfo.email}`} ref = {linkRef}>{personalInfo.email}</a></p>
              <p>LinkedIn :<a href={personalInfo.LinkedIn} target="blank" ref = {linkRef}>LinkedIn</a> </p>
              <p>GitHub :<a href={personalInfo.LinkedIn} target="blank" ref = {linkRef}>GitHub</a> </p>
              {personalInfo.address === "" && <p>{personalInfo.address}</p>}
            </div>
          {/* </div> */}

        </div>



    <div className="rightSide2">

          <div className="TopSide2">
            <div className="NamePost">
              <h1>{personalInfo.name}</h1>
              <h3>{experience.title}</h3>
            </div>
            <div className="summary2">
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quibusdam sequi et nobis at iure doloremque corporis alias! Neque
              molestiae consequatur et! Aliquid!
            </p>
          </div>
          </div> 
          

          <div className="Experience2">
           <h3>Experience</h3>
           <div className="ExpeItems">
          {experience.map((item, index)=>{
            return <div key={index} className={`item item${index}`}>
            <h4>
              <p className="years">{item.title} At {item.company}</p>
               <p> <span>{item.startDate}</span> <span>-{item.endDate}</span></p>
            </h4>
            <p className="descriptionEx">{item.description}</p>
            </div>
          })}
          </div>
          </div>

      </div>
      </div>
    </div>

  </div>
  );
}

export default Resume2;

