import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Sunday 12.00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
}
    if (weatherData.ready) {
      return (
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search a city"
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
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li>Mostly Cloudy</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="cloudy"
                  className="float-left"
                />{" "}
                <div className="float-left">
                  <span className="temperature">6</span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation 15%</li>
                <li>Humidity: 72$</li>
                <li>Wind 13 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      const apiKey = "840cae4b192e01b195c079d7573fc04f";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&&units=metric`;
      axios.get(url).then(handleResponse);
      return "Loadimg...";
    }
  }

