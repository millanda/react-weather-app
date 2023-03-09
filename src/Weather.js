import React from "react";
import "./Weather.css";

export default function Weather() {
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
}
