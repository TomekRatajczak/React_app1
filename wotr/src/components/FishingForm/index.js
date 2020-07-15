import React from 'react';
import s from './style.module.css';

export default function FishingForm({ title }) {
  return (
    <div className={s.root}>
      <div className="container">
        <h2 className="mb-5 text-center">{title}</h2>
        <form className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Pora roku:</legend>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Wiosna" value="Wiosna" />
              <label className="form-check-label" for="Wiosna">Wiosna</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Lato" value="Lato" />
              <label className="form-check-label" for="Lato">Lato</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Jesień" value="Jesień" />
              <label className="form-check-label" for="Jesień">Jesień</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Zima" value="Zima" />
              <label className="form-check-label" for="Zima">Zima</label>
            </div>
          </div>
        </form>
        <form className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Pora dnia:</legend>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Poranek" value="Poranek" />
              <label className="form-check-label" for="Poranek">Poranek</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Południe" value="Południe" />
              <label className="form-check-label" for="Południe">Południe</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Wieczór" value="Wieczór" />
              <label className="form-check-label" for="Wieczór">Wieczór</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Noc" value="Noc" />
              <label className="form-check-label" for="Noc">Noc</label>
            </div>
          </div>
        </form>
        <form className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Pogoda:</legend>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Pochmurno" value="Pochmurno" />
              <label className="form-check-label" for="Pochmurno">Pochmurno</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Słonecznie" value="Słonecznie" />
              <label className="form-check-label" for="Słonecznie">Słonecznie</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Umiarkowanie" value="Umiarkowanie" />
              <label className="form-check-label" for="Umiarkowanie">Umiarkowanie</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Deszcz" value="Deszcz" />
              <label className="form-check-label" for="Deszcz">Deszcz</label>
            </div>
          </div>
        </form>
        <form className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Rodzaj połowu:</legend>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Rekreacyjnie" value="Rekreacyjnie" />
              <label className="form-check-label" for="Rekreacyjnie">Rekreacyjnie</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Oficjalny trening" value="Oficjalny trening" />
              <label className="form-check-label" for="Oficjalny trening">Oficjalny trening</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="Zawoody" value="Zawoody" />
              <label className="form-check-label" for="Zawoody">Zawoody</label>
            </div>
          </div>
        </form>
        <form className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Czas połowu:</legend>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="2 godz" value="2 godz" />
              <label className="form-check-label" for="2 godz">2 godz</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="3 godz" value="3 godz" />
              <label className="form-check-label" for="3 godz">3 godz</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="4 godz" value="4 godz" />
              <label className="form-check-label" for="4 godz">4 godz</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="pow 5 godz" value="pow 5 godz" />
              <label className="form-check-label" for="pow 5 godz">pow 5 godz</label>
            </div>
          </div>
        </form>
        <form className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Dłogość wedki</legend>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="3m" value="3m" />
              <label className="form-check-label" for="3m">3m</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="4m" value="4m" />
              <label className="form-check-label" for="4m">4m</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="5m" value="5m" />
              <label className="form-check-label" for="5m">5m</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="6m" value="6m" />
              <label className="form-check-label" for="6m">6m</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="7m" value="7m" />
              <label className="form-check-label" for="7m">7m</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="8m" value="8m" />
              <label className="form-check-label" for="8m">8m</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genere" id="9m" value="9m" />
              <label className="form-check-label" for="9m">9m</label>
            </div>
          </div>
        </form>
        <form className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Poławiane gatunki:</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="genere" id="Ukleja" value="Ukleja" />
                <label className="form-check-label" for="Ukleja">Ukleja</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="genere" id="Płoć" value="Płoć" />
                <label className="form-check-label" for="Płoć">Płoć</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="genere" id="Krąp" value="Krąp" />
                <label className="form-check-label" for="Krąp">Krąp</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="genere" id="Leszcz" value="Leszcz" />
                <label className="form-check-label" for="Leszcz">Leszcz</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="genere" id="Kleń, Jaź, Jelec" value="Kleń, Jaź, Jelec" />
                <label className="form-check-label" for="Kleń, Jaź, Jelec">Kleń, Jaź, Jelec</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="genere" id="Ryby karpiowate małe" value="Ryby karpiowate małe" />
                <label className="form-check-label" for="Ryby karpiowate małe">Ryby karpiowate małe</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="genere" id="Ryby karpiowate duże" value="Ryby karpiowate duże" />
                <label className="form-check-label" for="Ryby karpiowate duże">Ryby karpiowate duże</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}