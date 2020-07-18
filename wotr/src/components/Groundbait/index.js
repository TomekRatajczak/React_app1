import React from 'react';
import s from './style.module.css'
// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default class Groundbait extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partOfTheYear: this.props.partOfTheYear,
      partOfTheDay: this.props.partOfTheDay,
      weatherNow: this.props.weatherNow,
      typeOfCatch: this.props.typeOfCatch,
      timeOfFishing: this.props.timeOfFishing,
      rodLength: this.props.rodLength,
      spicies: this.props.spicies,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className="container"></div>
        <h2 className="mb-5 text-center">Gruntowanie</h2>
        <div className="row justify-content-center">
          <div class="col-sm-12 col-md-6">
          <h3 className="mb-4 text-center text-warning">Przygotowanie zanęty:</h3>
          <div class=" mx-auto col-10 embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1PDMFQAvHXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-sm-10 col-md-5">
            Zanęta
            <ul>
                <li>Gatunek{this.props.spicies}</li>
                <li>spławik: Bombka</li>
                <li>obciążenie główne: 5g</li>
                <li>obciążenie dodatkowe: 2,4g</li>
                <li>obiążenie sygnalizacyjne: 3x0,2g</li>
                <li>przypon; 0,12mm x 30cm</li>
                <li>haczyk: nr.14</li>
              </ul>
        </div>
        </div>
      </div>
    )
  }
}