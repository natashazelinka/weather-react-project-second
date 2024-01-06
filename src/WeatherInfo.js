import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="tempIconClass">{Math.round(props.data.temp)}</div>

      <div class="tempIconClass" id="tempIcon"></div>
      <span class="units">
        <span href="#">°C</span>|<span href="#">°F</span>
      </span>
      <br />
      <br />
      <div className="float-left main">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>
      <h3 className="cityClass">{props.data.city}</h3>
      <p>
        <span className="span-1">
          <FormattedDate date={props.data.date} />
        </span>
        <br />
        <span className="text-capitalize">{props.data.description}</span>
        <br />
        <span>🌬 Humidity: </span>
        <span>{props.data.humidity}</span>
        <span>%</span>
        <br />
        <span>💨 Wind: </span>
        <span>{Math.round(props.data.wind)}</span>
        <span>mph</span>
      </p>
    </div>
  );
}
