import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let UrlKey = "76a35369f06f76080a05f6fc077ecb04";
  let Url =
    "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=76a35369f06f76080a05f6fc077ecb04";

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            className="WeatherForecast-icon"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          {/* <WeatherIcon code="01d" size="40" /> */}
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
