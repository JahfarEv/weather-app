import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherdata] = useState({
    main: {},
    weather: [{}],
  });
  const [location, setLocation] = useState("");

  const Api = `https://api.openweathermap.org/data/2.5/weather?&appid=de7e9e5cabf1db28201cac646548c99e&q=${location},India&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(Api).then((response) => {
        setWeatherdata(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="home-container">
      <h1 className="title">Weather App</h1>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
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

export default Weather;
