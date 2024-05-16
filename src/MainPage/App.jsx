import React, { useState } from "react";
import "./App.css";
import Resume1 from "../components/Resumes/Resume1/Resume1";
import { Link, Route, Routes } from "react-router-dom";
import ResumeInputFromUser from "../components/ResumeInputFromUser/ResumeInputFromUser";
import SelectTemp from "../components/TemplateSelecter/SelectTemp";
import { colorContext } from "../components/ColorPicker/ColorPicker.js";
import { setColorContext } from "../components/ColorPicker/ColorPicker.js";

function App() {

  

  const [personalInfo, setPersonalInfo] = useState({
    name: "Arpit Tiwari",
    WorkingAs: "FrontEnd Developer",
    email: "tdm75513@gmail.com",
    phone: "8090426994",
    LinkedIn : "https://www.linkedin.com/in/arpit-tiwari-251bbb226/",
    GitHub : "https://www.linkedin.com/in/arpit-tiwari-251bbb226/",
    address: "",
  });

  const [education, setEducation] = useState({
    degree: "BCA",
    institution: "Hindustan institute Of Science And Technology",
    graduationStartYear: "2022",
    graduationEndYear: "2025",
    Score : "",
    description: "Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.",
  });




  // Initialize skills state as an empty array
  const [skills, setSkills] = useState([]);



  const [experience, setExperience] = useState({
    title: "Frontend Web Developer",
    company: "Geek Rider",
    startDate: "May 15",
    endDate: "Aug 15",
    description: "Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.",
  });


  return (
  
    <div className="UserInfoEntry">
      <Routes>
        <Route
          path="/"
          element={
            <ResumeInputFromUser
              personalInfo={personalInfo}
              education={education}
              experience={experience}
              skills={skills}
              setEducation={setEducation}
              setPersonalInfo={setPersonalInfo}
              setExperience={setExperience}
              setSkills={setSkills}
            />
          }
        />

        <Route
          path={"/Resume"}
          element={
            <Resume1
              personalInfo={personalInfo}
              education={education}
              experience={experience}
              skills={skills}
            />
          }
        />

        <Route path="/template" element={<SelectTemp personalInfo={personalInfo} education={education} experience={experience} skills={skills}/>} />
      </Routes>

    </div>
     
  );
}

export default App;
