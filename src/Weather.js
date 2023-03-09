import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Seattle</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>{" "}
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/310/370/original/partly-cloudy-i-flat-multicolor-icon-vector.jpg"
              alt="partly cloudy"
            />
            <span className="current-temperature">44</span>
            <span className="temperature-unit">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 12 mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b9da97a66329124a9eae273c120a5d07";
    let city = "Seattle";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
