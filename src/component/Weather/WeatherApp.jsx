import React, {useState} from 'react';
import Cloud_icon from '../Assets/cloud.png'
import src_icon from '../Assets/search.png'
import './weatherApp.css'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png';
import Clear_icon from '../Assets/clear.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import broken_clouds from '../Assets/th.png';
import thunder_storm from '../Assets/jjjj.png';
import defaults from '../Assets/remove.png'
const weatherApp =  () => {
  let api_key="f4227d67df2f6e2754ff219aeba9389e";
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const[wicon,setWicon]= useState(defaults)
  const search=async ()=>{
    const element=document.getElementsByClassName("cityInput");
    if (element[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
   
  let response = await  fetch(url);
  let data= await response.json();
   const humidity=document.getElementsByClassName("humidity-percent")
   const wind =document.getElementsByClassName("wind-rate");
  const temprature=document.getElementsByClassName("weather-temp")
const location=document.getElementsByClassName("weather-location")
humidity[0].innerHTML=data.main.humidity+ "%";
wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
temprature[0].innerHTML=Math.floor(data.main.temp)+"°c";
// location[0].innerHTML = data.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
location[0].innerHTML = data.name.replace(/\b\w/g, c => c.toUpperCase());



 
if(data.weather[0].icon==="01d"|| data.weather[0].icon==="01n"){

  setWicon(Clear_icon);
}

else if(data.weather[0].icon==="02d"|| data.weather[0].icon==="02n"){
  
   setWicon(Cloud_icon);

  }
  else if(data.weather[0].icon==="03d"|| data.weather[0].icon==="03n"){
  
    setWicon(drizzle_icon);
 
   }
   else if(data.weather[0].icon==="04d"|| data.weather[0].icon==="04n"){
  
    setWicon(Cloud_icon);
 
   }
   else if(data.weather[0].icon==="09d"|| data.weather[0].icon==="09n"){
  
    setWicon(rain_icon);
 
   }
   else if(data.weather[0].icon==="10d"|| data.weather[0].icon==="10n"){
  
    setWicon(rain_icon);
 
   }
   else if(data.weather[0].icon==="11d"|| data.weather[0].icon==="11n"){
  
    setWicon(thunder_storm );
 
   }
   else if(data.weather[0].icon==="13d"|| data.weather[0].icon==="13n"){
  
    setWicon(snow_icon);
 
   }
   else{
       setWicon(Clear_icon)
   }
}

  return (
      
    <>
   <div className='container'>
    <div className='top-bar'>
      <input type='text' className='cityInput' placeholder='search'/>
       
       <div className='search-icon ' onClick={()=>{search()}}>
          <img src={src_icon} alt='' />
       </div>
      </div>
      <div className='weather-image'>
           <img src={wicon} alt='noimage' className='img'/>
      </div>
      <div className='weather-temp'></div>
      <div className='weather-location'>{}</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt='' className='icon'/>
          <div className='data'>
           <div className='humidity-percent'>0%</div>
           <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon'/>
          <div className='data'>
           <div className='wind-rate'>0 km/h</div>
           <div className='text'>Wind-spped</div>
          </div>
        </div>
      </div>
   </div>

    </>
  )
}

export default weatherApp;
