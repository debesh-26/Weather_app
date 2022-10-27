import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { CURRENT_WEATHER_API_URL, CURRENT_WEATHER_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState();

  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    let [lat, lon] = searchData.value.split(",");
    console.log(searchData);
    lat = parseInt(lat, 10).toFixed(2);
    lon = parseInt(lat, 10).toFixed(2);

    const CurrentWeatherFetch =
      fetch(`${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_KEY}&units=metric
      `);
    const forecastFetch =
      fetch(`${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_KEY}&units=metric
      `);
    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
