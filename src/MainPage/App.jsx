import React, { useState } from "react";
import "./App.css";
import Resume1 from "../components/Resumes/Resume1/Resume1";
import { Link, Route, Routes } from "react-router-dom";
import ResumeInputFromUser from "../components/ResumeInputFromUser/ResumeInputFromUser";
import SelectTemp from "../components/TemplateSelecter/SelectTemp";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState({
    degree: "",
    institution: "",
    graduationYear: "",
  });

  // Initialize skills state as an empty array
  const [skills, setSkills] = useState([]);

  const [experience, setExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
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

        <Route path="/template" element={<SelectTemp />} />
      </Routes>

    </div>
  );
}

export default App;
