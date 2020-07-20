import React, { useState } from 'react';
import s from './style.module.css';
const api = {
  key: "3fd76667636a1b1e95e4306274b34af4",
  base: "https://api.openweathermap.org/data/2.5/"
}
export default function Weather({ title }) {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=pl`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
      });

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

    <div className={s.root} id="link2">

      <div className="container">
        <h2 className="mb-5" >{title}</h2>
        <form class="input-group col-xs-10 col-md-8 mx-auto" onSubmit={search}>
          <input
            type="text"
            className="form-control border border-warning bg-dark text-white"
            placeholder="Wpisz Miasto"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
          <button type="submit" class="btn btn-primary btn-warning mb-2">Sprawdź</button>
        </form>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className={s.location}>{weather.name}, {weather.sys.country}</div>
              <div className={s.date}>{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div><img className={s.icon} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/></div>
              <div className={s.temperature}>{Math.round(weather.main.temp)}&#8451;</div>
              <div className={s.clouds}>{weather.weather[0].description}</div>
              
              <div className="weather">Wiatr: {Math.round(weather.wind.speed)} m/s</div>
              <div className="weather">Ciśnienie: {Math.round(weather.main.pressure)} hPa</div>
            </div>
          </div>
        ) : ('')}
      </div>

    </div>
  )
}