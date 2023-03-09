import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>Seattle</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">Mostly Cloudy</li>
      </ul>{" "}
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/310/370/original/partly-cloudy-i-flat-multicolor-icon-vector.jpg"
            alt="partly cloudy"
          />
          <span className="current-temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temperature-unit">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
