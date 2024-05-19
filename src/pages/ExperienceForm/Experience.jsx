import React from 'react';
import './Experience.css';

const ExperienceForm = ({ experience, setExperience }) => {

  // Handler for input changes
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = experience.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setExperience(updatedExperience);
  };


  function RemoveSpecificExperience(index, e) {
    e.preventDefault();
    setExperience((preVal)=>{
      let newArray = [...preVal];
      newArray.splice(index, 1)
      return newArray;
    })
  }

  return (
    <div className='ExperienceOfUser'>
      <h1>Experience</h1>
      <form action="">
        {experience.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className='InputField'>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={item.company}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>Start Date:</label>
                <input
                  type="text"
                  name="startDate"
                  value={item.startDate}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>End Date:</label>
                <input
                  type="text"
                  name="endDate"
                  value={item.endDate}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className='InputField'>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={item.description}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <button onClick={(e)=>{RemoveSpecificExperience(index, e)}}>Remove Education</button>
              <hr />
            </React.Fragment>
          );
        })}
      </form>     
    </div>
  );
};

export default ExperienceForm;
