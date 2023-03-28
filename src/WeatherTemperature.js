import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return Math.round((props.fahrenheit - 32) * (5 / 9));
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temperature">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="temperature-unit">
          °F |{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="current-temperature">{celsius()}</span>
        <span className="temperature-unit">
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
