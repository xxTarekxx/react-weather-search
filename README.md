Search Cities Weather App Screen Shot![sc](https://user-images.githubusercontent.com/52683281/201574420-85dbd281-7619-4474-96b2-e5488fefbe62.jpg)
Mobile Screenshot![Sc](https://user-images.githubusercontent.com/52683281/202832428-1eab5e39-4811-4aab-a841-02984f34f2ec.jpg)


## Overview

This app pulls data from [OpenWeather](https://openweathermap.org/api) and [GeoDB](https://rapidapi.com/wirefreethought/api/geodb-cities/)

**Deployed LINK**: [Search Cities Weather App](https://master.d3pzyltjs0n18u.amplifyapp.com/)

## Features

- Search City to display:

  - daily temprature
  - 7 days Temrapture prediction
  - Humidity
  - Pressure
  - Location
  - Sea Level
  - Clouds Condition
  - Wind Speed
  - Feels Like
  - date & time

- Location and temperature data depend on geolocation.

- Dynamic and animated background based on temperature data

## Tech/Dependencies used

- [Create React App](https://create-react-app.dev/)

- Add-on packages include:
  - [Accordion](https://www.npmjs.com/package/react-accessible-accordion)
  - [JestJs](https://jestjs.io/)

## Getting Started

- Create OpenWeather account for API key, follow these [instructions for openweatherApi](https://openweathermap.org/api) for more detail.
  [instructions for GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/) for more detail.

- Clone the repository

```bash

git clone https://github.com/xxTarekxx/react-weather-search.git

```

- Install dependencies listed in add-on packages using `npm install`

- Within WeatherApi.jsx (comfy_app > src > components > Weatherapi > WeatherApi.jsx), line 30, paste your API key into the following axios get call:

```

.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&appid={YOUR API KEY GOES HERE}`
      )

```

- You are set to go

## Who maintains and contributes to the project

This is a project for our personal learning process.

<!-- By Tarek Ismael -->
