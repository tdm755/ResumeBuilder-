import React, { useEffect } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from "react";
import "./Resume.css";
import ColorPicker from "../../ColorPicker/ColorPicker.jsx";
import FontSelector from "../../FontSelector/FontSelector.jsx";

function Resume1({ personalInfo, education, experience, skills, colorOfTem, setColorOfTem }) {



  const downloadPDF = () => {
    const input = document.getElementById('resume-template'); // ID of the resume container
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('resume.pdf');
    });
  };

  function lightenHexColor(hexColor, percent) {
    // Convert hexadecimal color to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate percentage of white to blend
    const complement = 1 - percent / 100;

    // Blend RGB components with white
    const rLightened = Math.round(r * complement + 255 * percent / 100);
    const gLightened = Math.round(g * complement + 255 * percent / 100);
    const bLightened = Math.round(b * complement + 255 * percent / 100);

    // Convert back to hexadecimal
    const lightenedHex = `#${rLightened.toString(16)}${gLightened.toString(16)}${bLightened.toString(16)}`;

    return lightenedHex;
  }


  return (<div className="FlexReverse">

    <div className="ColorFonts">
      <FontSelector />
      <ColorPicker colorOfTem={colorOfTem} setColorOfTem={setColorOfTem} />
      <button className="DownloadPdf" onClick={downloadPDF}>Download PDF</button>
    </div>

    <hr />

    <div className="ToDownLoadFlex">

      <div id="resume-template" className="resume_template1">

        <div style={{ backgroundColor: colorOfTem }} className="TopSide">
          <div className="NamePost">
            <h1>{personalInfo.name}</h1>
            <h3 style={{}}>{experience.title}</h3>
          </div>
          <div className="summary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quibusdam sequi et nobis at iure doloremque corporis alias! Neque
              molestiae consequatur et! Aliquid!
            </p>
          </div>
        </div>
        <div className="BottomSide">
          <div className="leftSide">
            <div style={{ backgroundColor: colorOfTem }} className="sideDesign"></div>
            <div className="asidebar">
              <div className="skillSec">
                <h3>Skills</h3>
                <ul>
                  {skills.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
              <div className="contactSec">
                <h3 className="text-2xl">Contact Info</h3>
                <p>Mob : {personalInfo.phone}</p>
                <p>Email : <a href={`mailto:${personalInfo.email}`} style={{ color: `${lightenHexColor(colorOfTem, 10)}`, fontWeight: '600' }}>{personalInfo.email}</a></p>
                <p>LinkedIn :<a href={personalInfo.LinkedIn} target="blank" style={{ color: `${lightenHexColor(colorOfTem, 10)}`, fontWeight: '600' }}>LinkedIn</a> </p>
                <p>GitHub :<a href={personalInfo.LinkedIn} target="blank" style={{ color: `${lightenHexColor(colorOfTem, 10)}`, fontWeight: '600' }}>GitHub</a> </p>
                {personalInfo.address === "" && <p>{personalInfo.address}</p>}
              </div>
            </div>

          </div>
            <div className="line"></div>
          <div className="rightSide">

            <div className="Experience">
              <h3>Experience</h3>
              <div className="ExpeItems">
                {experience.map((item, index) => {
                  return <div key={index} className={`item item${index}`}>
                    <h4>
                      <p className="years">{item.title} At {item.company}</p>
                      <p className="TimePeriod"> <span>{item.startDate}</span> <span>-{item.endDate}</span></p>
                    </h4>
                    <p className="descriptionEx">{item.description}</p>
                  </div>
                })}
              </div>
            </div>

            <div className="Education">
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

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Resume1;