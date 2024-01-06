import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <nav className="navbar bg-body">
            <div className="container-fluid">
              <div className="navbar-brand">Location</div>

              <form className="d-flex">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for a city"
                  autoComplete="off"
                  autofocus="on"
                />
                <input
                  className="form-control me-2"
                  type="submit"
                  value="Search"
                />
                <input
                  className="form-control me-3"
                  type="submit"
                  value="Current"
                />
              </form>
            </div>
          </nav>

          <div className="tempIconClass">{weatherData.temp}</div>

          <div class="tempIconClass" id="tempIcon"></div>
          <span class="units">
            <span href="#">°C</span>|<span href="#">°F</span>
          </span>

          <br />
          <br />
          <img
            className="main"
            src={weatherData.iconUrl}
            width="30px"
            alt="weather-icon"
          />
          <h3 className="cityClass">{weatherData.city}</h3>
          <p>
            <span className="span-1">
              {weatherData.date} at {weatherData.time}
            </span>
            <br />
            <span className="conditionClass">{weatherData.description}</span>
            <br />
            <span>🌬 Humidity: </span>
            <span>{weatherData.humidity}</span>
            <span>%</span>
            <br />
            <span>💨 Wind: </span>
            <span>{weatherData.wind}</span>
            <span>mph</span>
          </p>
        </div>
      </div>
    );
  } else {
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
