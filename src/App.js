import { useState } from 'react';
import './App.css';
import { WEATHER_API_KEY, WEATHER_API_URL } from './citiesApi';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecase, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&&appid=${WEATHER_API_KEY}`);
    const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`);

    console.log(searchData);

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })

  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
