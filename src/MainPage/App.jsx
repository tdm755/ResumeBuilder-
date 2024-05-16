import { useState } from "react";
import "./App.css";
import Resume1 from "../components/Resume/Resume1";
import { Link, Route, Routes } from "react-router-dom";
import ResumeInputFromUser from "../components/Resume/ResumeInputFromUser/ResumeInputFromUser";

function App() {
  const [ClickedVal, setClickedVal] = useState(false);

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

  const [skills, setSkills] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
  });

  const [experience, setExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  function handleClick(e) {
    // e.preventDefault();

    console.log(experience);
    console.log(personalInfo);
  }

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
      </Routes>
      
      <Link to={"/Resume"}>
          <button className="CreatingResume" onClick={handleClick}>Create Resume</button>
        </Link>

    </div>
  );
}

export default App;
