import React from "react";
import './Education.css';

const EducationForm = ({ education, setEducation }) => {

  // Handler for input changes
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = education.map((item, i) => 
      i === index ? { ...item, [name]: value } : item
    );
    setEducation(updatedEducation);
  };

  function removeSpecificEducation(index, e) {
    e.preventDefault();
    setEducation((preVal)=>{

     /*method 1*/
      let newArray = [...preVal];
      newArray.splice(index, 1);
      return newArray;

      /* method 2 :*/
      //return [...preVal.slice(0, index), ...preVal.slice(index + 1)]
    })
     
  }



  return (
    <div className="EducationOfStudents">
      <h1>Education</h1>
      <form action="">
        {education.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className='InputField'>
                <label>Degree:</label>
                <input
                  type="text"
                  name='degree'
                  value={item.degree}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>Institution:</label>
                <input
                  type="text"
                  name='institution'
                  value={item.institution}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>Graduation Start Year:</label>
                <input
                  type="text"
                  name='graduationStartYear'
                  value={item.graduationStartYear}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>Graduation End Date:</label>
                <input
                  type="text"
                  name='graduationEndYear'
                  value={item.graduationEndYear}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>Score:</label>
                <input
                  type="text"
                  name='Score'
                  value={item.Score}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
              <div className="InputField">
                <label>Description:</label>
                <input
                  type="text"
                  name='description'
                  value={item.description}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <button onClick={(e)=>{removeSpecificEducation(index, e)}}>Remove Education</button>
              <hr />
            </React.Fragment>
          );
        })}
      </form>          
    </div>
  );
};

export default EducationForm;
