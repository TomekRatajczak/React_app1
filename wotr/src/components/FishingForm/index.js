import React from 'react';
import s from './style.module.css';

export default class FishingForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      partOfTheYear: this.props.partOfTheYear,
      partOfTheDay: this.props.partOfTheDay,
      weatherNow: this.props.weatherNow,
      typeOfCatch: this.props.typeOfCatch,
      timeOfFishing: this.props.timeOfFishing,
      rodLength: this.props.rodLength,
      spicies: this.props.spicies
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();

    console.log("event", event.target);
    console.log("this.state", this.state);
  };

  handleOnPartOfTheYearChange = event => {
    this.setState({
      partOfTheYear: event.target.value
    });
  };

  handleOnPartOfTheDayChange = event => {
    this.setState({
      partOfTheDay: event.target.value
    });
  };

  handleOnWeatherNowChange = event => {
    this.setState({
      weatherNow: event.target.value
    });
  };

  handleOnTypeOfCatchChange = event => {
    this.setState({
      typeOfCatch: event.target.value
    });
  };

  handleOnTimeOfFishingChange = event => {
    this.setState({
      timeOfFishing: event.target.value
    });
  };

  handleOnRodLengthChange = event => {
    this.setState({
      rodLength: event.target.value
    });
  };

  handleOnSpiciesChange = event => {
    this.setState({
      spicies: event.target.value
    });
  };

  render(){
    return (
      <div className={s.root}>
        <div className="container">
          <h2 className="mb-5 text-center">Formularz</h2>
          <form className="form-group" onSubmit={this.handleOnSubmit}>
            <div className="row ">
              <legend className="col-form-label col-sm-2 pt-0">Pora roku:</legend>
              <div className={s.border}>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheYearChange} className="form-check-input" type="radio" name="partOfTheYear" id="Wiosna" value="Wiosna" />
                  <label className="form-check-label" for="Wiosna">Wiosna</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheYearChange} className="form-check-input" type="radio" name="partOfTheYear" id="Lato" value="Lato" />
                  <label className="form-check-label" for="Lato">Lato</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheYearChange} className="form-check-input" type="radio" name="partOfTheYear" id="Jesień" value="Jesień" />
                  <label className="form-check-label" for="Jesień">Jesień</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheYearChange} className="form-check-input" type="radio" name="partOfTheYear" id="Zima" value="Zima" />
                  <label className="form-check-label" for="Zima">Zima</label>
                </div>
              </div>
            </div>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Pora dnia:</legend>
              <div className={s.border}>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheDayChange} className="form-check-input" type="radio" name="partOfTheDay" id="Poranek" value="Poranek" />
                  <label className="form-check-label" for="Poranek">Poranek</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheDayChange} className="form-check-input" type="radio" name="partOfTheDay" id="Południe" value="Południe" />
                  <label className="form-check-label" for="Południe">Południe</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheDayChange} className="form-check-input" type="radio" name="partOfTheDay" id="Wieczór" value="Wieczór" />
                  <label className="form-check-label" for="Wieczór">Wieczór</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnPartOfTheDayChange} className="form-check-input" type="radio" name="partOfTheDay" id="Noc" value="Noc" />
                  <label className="form-check-label" for="Noc">Noc</label>
                </div>
              </div>
            </div>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Pogoda:</legend>
              <div className={s.border}>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnWeatherNowChange} className="form-check-input" type="radio" name="weatherNow" id="Pochmurno" value="Pochmurno" />
                  <label className="form-check-label" for="Pochmurno">Pochmurno</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnWeatherNowChange} className="form-check-input" type="radio" name="weatherNow" id="Słonecznie" value="Słonecznie" />
                  <label className="form-check-label" for="Słonecznie">Słonecznie</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnWeatherNowChange} className="form-check-input" type="radio" name="weatherNow" id="Umiarkowanie" value="Umiarkowanie" />
                  <label className="form-check-label" for="Umiarkowanie">Umiarkowanie</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnWeatherNowChange} className="form-check-input" type="radio" name="weatherNow" id="Deszcz" value="Deszcz" />
                  <label className="form-check-label" for="Deszcz">Deszcz</label>
                </div>
              </div>
            </div>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Rodzaj połowu:</legend>
              <div className={s.border}>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnTypeOfCatchChange} className="form-check-input" type="radio" name="typeOfCatch" id="Rekreacyjnie" value="Rekreacyjnie" />
                  <label className="form-check-label" for="Rekreacyjnie">Rekreacyjnie</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnTypeOfCatchChange} className="form-check-input" type="radio" name="typeOfCatch" id="Oficjalny trening" value="Oficjalny trening" />
                  <label className="form-check-label" for="Oficjalny trening">Oficjalny trening</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnTypeOfCatchChange} className="form-check-input" type="radio" name="typeOfCatch" id="Zawoody" value="Zawoody" />
                  <label className="form-check-label" for="Zawoody">Zawoody</label>
                </div>
              </div>
            </div>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Czas połowu:</legend>
              <div className={s.border}>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnTimeOfFishingChange} className="form-check-input" type="radio" name="timeOfFishing" id="2 godz" value="2 godz" />
                  <label className="form-check-label" for="2 godz">2 godz</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnTimeOfFishingChange} className="form-check-input" type="radio" name="timeOfFishing" id="3 godz" value="3 godz" />
                  <label className="form-check-label" for="3 godz">3 godz</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnTimeOfFishingChange} className="form-check-input" type="radio" name="timeOfFishing" id="4 godz" value="4 godz" />
                  <label className="form-check-label" for="4 godz">4 godz</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnTimeOfFishingChange} className="form-check-input" type="radio" name="timeOfFishing" id="pow 5 godz" value="pow 5 godz" />
                  <label className="form-check-label" for="pow 5 godz">pow 5 godz</label>
                </div>
              </div>
            </div>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Dłogość wedki</legend>
              <div className={s.border}>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnRodLengthChange} className="form-check-input" type="radio" name="rodLength" id="3m" value="3m" />
                  <label className="form-check-label" for="3m">3m</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnRodLengthChange} className="form-check-input" type="radio" name="rodLength" id="4m" value="4m" />
                  <label className="form-check-label" for="4m">4m</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnRodLengthChange} className="form-check-input" type="radio" name="rodLength" id="5m" value="5m" />
                  <label className="form-check-label" for="5m">5m</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnRodLengthChange} className="form-check-input" type="radio" name="rodLength" id="6m" value="6m" />
                  <label className="form-check-label" for="6m">6m</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnRodLengthChange} className="form-check-input" type="radio" name="rodLength" id="7m" value="7m" />
                  <label className="form-check-label" for="7m">7m</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnRodLengthChange} className="form-check-input" type="radio" name="rodLength" id="8m" value="8m" />
                  <label className="form-check-label" for="8m">8m</label>
                </div>
                <div className="form-check form-check-inline">
                  <input value={this.state.value} onChange={this.handleOnRodLengthChange} className="form-check-input" type="radio" name="rodLength" id="9m" value="9m" />
                  <label className="form-check-label" for="9m">9m</label>
                </div>
              </div>
            </div>
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Poławiane gatunki:</legend>
              <div className={s.border}>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input value={this.state.value} onChange={this.handleOnSpiciesChange} className="form-check-input" type="radio" name="spicies" id="Ukleja" value="Ukleja" />
                    <label className="form-check-label" for="Ukleja">Ukleja</label>
                  </div>
                  <div className="form-check">
                    <input value={this.state.value} onChange={this.handleOnSpiciesChange} className="form-check-input" type="radio" name="spicies" id="Płoć" value="Płoć" />
                    <label className="form-check-label" for="Płoć">Płoć</label>
                  </div>
                  <div className="form-check">
                    <input value={this.state.value} onChange={this.handleOnSpiciesChange} className="form-check-input" type="radio" name="spicies" id="Krąp" value="Krąp" />
                    <label className="form-check-label" for="Krąp">Krąp</label>
                  </div>
                  <div className="form-check">
                    <input value={this.state.value} onChange={this.handleOnSpiciesChange} className="form-check-input" type="radio" name="spicies" id="Leszcz" value="Leszcz" />
                    <label className="form-check-label" for="Leszcz">Leszcz</label>
                  </div>
                  <div className="form-check">
                    <input value={this.state.value} onChange={this.handleOnSpiciesChange} className="form-check-input" type="radio" name="spicies" id="Kleń, Jaź, Jelec" value="Kleń, Jaź, Jelec" />
                    <label className="form-check-label" for="Kleń, Jaź, Jelec">Kleń, Jaź, Jelec</label>
                  </div>
                  <div className="form-check">
                    <input value={this.state.value} onChange={this.handleOnSpiciesChange} className="form-check-input" type="radio" name="spicies" id="Ryby karpiowate małe" value="Ryby karpiowate małe" />
                    <label className="form-check-label" for="Ryby karpiowate małe">Ryby karpiowate małe</label>
                  </div>
                  <div className="form-check">
                    <input value={this.state.value} onChange={this.handleOnSpiciesChange} className="form-check-input" type="radio" name="spicies" id="Ryby karpiowate duże" value="Ryby karpiowate duże" />
                    <label className="form-check-label" for="Ryby karpiowate duże">Ryby karpiowate duże</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 btn btn-warning btn-primary btn-lg" type="submit" value="Submit">Zatwierdź</button>
          </form>
        </div>
      </div>
    )
  }
}