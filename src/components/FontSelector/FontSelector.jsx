import React, { useEffect, useState } from 'react'
import './FontSelector.css';

function FontSelector(props) {
  let ApiKey = "AIzaSyBn2dHphrwmzGdVpMNVDX5lVV9DVBw7LkA";
  let baseUrl = ` https://webfonts.googleapis.com/v1/webfonts?capability=CAPABILITY_UNSPECIFIED&sort=TRENDING&key=${ApiKey}`
  
  const [ApiData, setApiData] = useState([]);
  const [selectedFont, setSelectedFont] = useState('Roboto');

  async function FontData() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    setApiData(data.items);
    
  }

  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont}&amp;display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.body.style.fontFamily = selectedFont.replace('+', ' ');

    // Clean up: remove the previous font link when the component unmounts or selectedFont changes
    return () => {
        document.head.removeChild(link);
    };
}, [selectedFont]);


  useEffect(()=>{
    FontData();
  },[ApiData])


    function handleChangeSe(event) {
      setSelectedFont(event.target.value);
    }


      
 
  return (
     <div className='fonts'>
       {/* <p style={{fontFamily : selectedFont}}>Select Resume Font</p> */}
     <select name="Fonts" id="Fonts" onClick={handleChangeSe}>
        {ApiData.map((item)=>{
          
          if(item.family === 'Encode Sans Expanded'){
            return <option  key={item.family} value={item.family} selected> {item.family} </option>
          }
          else{
            return <option key={item.family} value={item.family}> {item.family} </option>
          }

          
        })}
     </select>
     </div>
  )
}

export default FontSelector
