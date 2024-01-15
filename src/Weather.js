import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      coordinates: response.data.coord,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b35c686ba9565ba0ab254c2230937552";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <nav className="navbar bg-body">
            <div className="container-fluid">
              <div className="navbar-brand">Location</div>

              <form onSubmit={handleSubmit} className="d-flex">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for a city"
                  autoComplete="off"
                  autofocus="on"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData} />
          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
