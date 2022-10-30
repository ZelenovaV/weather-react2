import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <>
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Search a city"
            className="form-control"
          />
          <input type="submit" value="Search" className="btn" />
        </form>
        <h1>Dnipro</h1>
        <ul>
          <li>sunday, 12.00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy"
            />{" "}
            6 C
          </div>
          <div className="col">
            <ul>
              <li>Precipitation 15%</li>
              <li>Humidity: 72$</li>
              <li>Wind 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
