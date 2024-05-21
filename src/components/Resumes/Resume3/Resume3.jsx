import React from 'react'
import ColorPicker from "../../ColorPicker/ColorPicker.jsx";
import FontSelector from "../../FontSelector/FontSelector.jsx";
import './Resume3.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Resume3({ personalInfo, education, experience, skills, colorOfTem, setColorOfTem }) {


  const downloadPDF = () => {
    const input = document.getElementById('resume'); // ID of the resume container
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



  return (
    <div className='TemPlates-Res w-[1050px]'>
      <div className="ColorFonts">
        <FontSelector />
        <ColorPicker colorOfTem={colorOfTem} setColorOfTem={setColorOfTem} />
        <button className="DownloadPdf" onClick={downloadPDF}>Download PDF</button>
      </div>

      <hr />

      <div className='ToDownLoadFlex'>
        <div className="resume" id='resume'>

          <div className="header">
            <div class="header-left">
              <h1>{personalInfo.name}</h1>

            </div>
            <div className="header-right" style={{ backgroundColor: colorOfTem }}>
              <p class="title text-2xl">
                {personalInfo.WorkingAs}
              </p>
            </div>
          </div>

          <div className="main">
            <div class="column-left">
              <div class="profile">
                <h3 style={{ backgroundColor: colorOfTem }}>PROFILE</h3>
                <p>
                  Enthusiastic and creative graphic designer with a passion for
                  translating ideas into visually compelling designs. With
                  experience in both print and digital mediums, I thrive on bringing
                  concepts to life through innovative and impactful designs.
                </p>
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

            </div>

            <div className="column-right">
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

              <div className="skills">
                <h3 className="right">SKILLS</h3>
                <ul>
                  {skills.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
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


            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Resume3
