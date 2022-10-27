import { useEffect, useState } from "react";
import "./current-weather.css";

import storm from "../../assets/storm.svg";
import rain from "../../assets/rain.svg";
import snow from "../../assets/snow.svg";
import cloud from "../../assets/cloud.svg";
import haze from "../../assets/haze.svg";
import clear from "../../assets/clear.svg";

const CurrentWeather = ({ data }) => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    let code = data?.weather[0].id;
    if (code >= 200 && code <= 232) setIcon(storm);
    else if (code >= 300 && code <= 321) setIcon(storm);
    else if (code >= 500 && code <= 531) setIcon(rain);
    else if (code >= 600 && code <= 622) setIcon(snow);
    else if (code >= 701 && code <= 781) setIcon(haze);
    else if (code >= 801 && code <= 804) setIcon(cloud);
    else if (code === 800) setIcon(clear);
  }, [data]);

  console.log({ data });
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={icon} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label color">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
