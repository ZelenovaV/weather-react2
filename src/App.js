import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Dnipro" />
        <footer>
          This project was coded by Viktoriia Zelenova and is{" "}
          <a
            href="https://github.com/ZelenovaV/weather-react2"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on a GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
