import React, {useState} from 'react';
import s from './style.module.css';
const api = {
  key: "3fd76667636a1b1e95e4306274b34af4",
  base: "https://api.openweathermap.org/data/2.5/"
}
export default function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
      "Lipiec", "Sierpień", "Wrzesień", "Październik", "Lisopad", "Grudzień"];

    let days = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Wpisz Miasto"
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">Temperatura: {Math.round(weather.main.temp)}&#8451;</div>
              <div className="weather">Zachmurzenie: {weather.weather[0].description}</div>
              
              <div className="weather">Wiatr: {Math.round(weather.wind.speed)} m/s</div>
            </div> 
          </div>
        ) : ('')}
      </div>

    </div>
  )
}