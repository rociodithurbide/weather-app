import "./reset.css";
import "./App.scss";
import Search from "./components/Search";
import Location from "./components/Location";
import Weather from "./components/Weather";

import { useState, useEffect } from "react";

const api = {
  key: "a8bc7bf81fa5677d9261c35b7c6c8384",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState("Buenos Aires");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getData = await fetch(
      `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
    );
    const json = await getData.json();

    console.log(json);

    const weatherDatas = {
      name: json.name,
      country: json.sys.country,
      temp: json.main.temp,
      weather: json.weather[0].main,
      description: json.weather[0].description,
    };
    setWeatherData(weatherDatas);
    setSearch("");
  }

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return `${day} ${date} ${month}`;
  };

  function handleSearch(inputValue) {
    setSearch(inputValue);
  }
  function handleOnKeyDown(keyCode) {
    if (keyCode === 13) {
      fetchData();
    }
  }

  return (
    <div className="app">
      <main>
        <div className="wrapper">
          <Search
            handleCallback={handleSearch}
            handleOnKeyDown={handleOnKeyDown}
          />
          <Location location={weatherData.name} country={weatherData.country} />
          <div className="dateTime">
            <p className="time">{dateBuilder(new Date())}</p>
          </div>
          <Weather
            temperature={weatherData.temp}
            weather={weatherData.weather}
            weatherDescription={weatherData.description}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
