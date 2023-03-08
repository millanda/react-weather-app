import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Millanda Zhou and is{" "}
          <a href="https://github.com/millanda/react-weather-app">
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
