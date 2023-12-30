import React from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Sunday",
    time: "14:04",
    description: "Overcast Clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    Humidity: "77",
    Wind: "70",
    temperature: "8",
  };

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

        <div className="tempIconClass">{weatherData.temperature}</div>

        <div class="tempIconClass" id="tempIcon"></div>
        <span class="units">
          <button href="#">°C</button>|<button href="#">°F</button>
        </span>

        <br />
        <br />
        <img
          className="main"
          src={weatherData.imgUrl}
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
          <span>{weatherData.Humidity}</span>
          <span>%</span>
          <br />
          <span>💨 Wind: </span>
          <span>{weatherData.Wind}</span>
          <span>mph</span>
        </p>
      </div>
    </div>
  );
}
