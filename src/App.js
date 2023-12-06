import React,{useEffect,useState} from "react";
import './App.css'
import axios from 'axios'


function App() {
  const [weatherData,setWeatherdata]=useState({
    main:{},
    weather:[{}]
  });
  const [location,setLocation] = useState('')
//  useEffect(()=>{
//   async function getData(){
    const Api = `https://api.openweathermap.org/data/2.5/weather?&appid=de7e9e5cabf1db28201cac646548c99e&q=${location},India&units=metric`
//     try{
//       let response = await axios.get(Api)
//       setWeatherdata(response.data)
//       console.log(response);
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
//   getData();

//  },[])
 const searchLocation = (event) =>{
  if(event.key === 'Enter'){
    axios.get(Api).then((response)=>{
      setWeatherdata(response.data)
      console.log(response.data);
    })
  }
 }
  return (
    <div className="home-container">
    <div className="search">
      <input value={location} onChange={event => setLocation(event.target.value) } onKeyPress={searchLocation} placeholder="Enter Location" type="text" />
    </div>
    <div className="main-container">
    
   <div className="card">
    <h1>{weatherData.name}</h1>
    <h1>{`${Math.round(weatherData.main.temp)}`}&deg;C</h1>
    <h1>{weatherData.weather[0].main}</h1>
    <h6>{weatherData.weather[0].description}</h6>
   </div>
  
      
    </div>

    </div>
  );
}

export default App;
