import React from 'react';
import s from './style.module.css'
// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default class Groundbait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <div className="container"></div>
        <h2 className="mb-5 text-center">Zanęta</h2>
        <div className="row justify-content-center">
          <div class="col-sm-12 col-md-6">
          <h3 className="mb-4 text-center text-warning">Przygotowanie zanęty:</h3>
          <div class=" mx-auto col-10 embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1PDMFQAvHXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-sm-10 col-md-5">
            <ul>
                <li>zanęta | litry zanęty</li>
                <li>glina | litry gliny</li>
                <li>ziemia | litry ziemi</li>
                <li>bentonit | litry bentonitu</li>
                <li>woda | litry wody</li>
                <li>dodatki | litry dodatków</li>
                <li>robaki | litry robaków</li>
                <li>sito | grubość sita</li>
              </ul>
        </div>
        </div>
      </div>
    )
  }
}