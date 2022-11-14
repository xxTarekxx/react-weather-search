import { useState } from "react";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./citiesApi";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecast, setForecast] = useState("");

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&&appid=${WEATHER_API_KEY}&units=imperial`,
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`,
    );
    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
