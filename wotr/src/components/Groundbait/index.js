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
    let groundBait = ''
    let groundBaitL = null
    let clay = ''
    let clayL = null
    let ground = ''
    let groundL = null
    let bentonite = ''
    let bentoniteL = ''
    let water = ''
    let waterL = null
    let groundAdds = ''
    let groundAddsL = null
    let worms = ''
    let wormsL = null
    let strainer = ''
    let strainerSize = ''

    //zanęta pod gatunek ryby i porę roku
    if (this.props.spicies === "Ukleja") {
      groundBait = ' Seans Record'
      clay = ' brak'
      ground = ' brak'
      bentonite = ' brak'
      water = 'przemoczona'
      groundAdds = 'mąka z jewabnika'
      worms = 'pinka'
      strainer = 'brak'
      strainerSize = 'brak'
      groundBaitL = 1
      clayL = 0
      groundL = 0
      bentoniteL = ''
      waterL = 1
      groundAddsL = 0.025
      wormsL = 0.05
    }
    if (this.props.spicies === "Płoć") {
      if ((this.props.partOfTheYear === "Wiosna") ||
        (this.props.partOfTheYear === "Lato") ||
        (this.props.partOfTheYear === "Jesień")) {
        groundBait = ' Seans Etange'
        clay = ' rzeczna sucha'
        ground = ' ziemia tofowa'
        bentonite = ' tak'
        water = 'dobrze nawilżona'
        groundAdds = 'pieczywo fluo'
        worms = 'pinka, ochotka'
        strainer = 'tak'
        strainerSize = '2x2 mm'
        groundBaitL = 0.5
        clayL = 0.5
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.4
        groundAddsL = 0.02
        wormsL = 0.05
      } else {
        groundBait = 'brak'
        clay = ' rzeczna ciemna'
        ground = ' ziemia tofowa'
        bentonite = ' tak'
        water = 'dobrze nawilżona'
        groundAdds = 'konopie'
        worms = 'ochotka'
        strainer = 'tak'
        strainerSize = '2x2 mm'
        clayL = 0.75
        groundL = 0.75
        bentoniteL = 0.02
        waterL = 0.4
        groundAddsL = 0.03
        wormsL = 0.02
      }

    }
    if (this.props.spicies === "Krąp") {
      if ((this.props.partOfTheYear === "Wiosna") ||
        (this.props.partOfTheYear === "Lato")) {
        groundBait = 'Seans Rouge'
        clay = 'rzeczna ciemna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'brak'
        worms = 'pinka, ochotka'
        strainer = 'tak'
        strainerSize = '2x2 mm'
        groundBaitL = 0.75
        clayL = 0.75
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.5
        groundAddsL = 0
        wormsL = 0.05
      } else {
        groundBait = 'Seans Rouge'
        clay = 'rzeczna ciemna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'konopie'
        worms = 'ochotka'
        strainer = 'tak'
        strainerSize = '2x2 mm'
        groundBaitL = 0.5
        clayL = 0.75
        groundL = 0.75
        bentoniteL = 0.02
        waterL = 0.4
        groundAddsL = 0
        wormsL = 0.03
      }
    }
    if (this.props.spicies === "Leszcz") {
      if ((this.props.partOfTheYear === "Wiosna") ||
        (this.props.partOfTheYear === "Lato")) {
        groundBait = 'Lorpio Super'
        clay = 'rzeczna jasna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'bread crumps'
        worms = 'dendrobena, custer'
        strainer = 'tak'
        strainerSize = '4x4 mm'
        groundBaitL = 0.75
        clayL = 0.75
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.5
        groundAddsL = 0.05
        wormsL = 0.05
      } else {
        groundBait = 'Lorpio Super'
        clay = 'rzeczna ciemna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'bread crumps'
        worms = 'biały, ochotka'
        strainer = 'tak'
        strainerSize = '3x3 mm'
        groundBaitL = 0.5
        clayL = 1
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.5
        groundAddsL = 0.03
        wormsL = 0.03
      }
    }
    if (this.props.spicies === "Kleń, Jaź, Brzana") {
      if ((this.props.partOfTheYear === "Wiosna") ||
        (this.props.partOfTheYear === "Lato")) {
        groundBait = 'Lorpio Extra'
        clay = 'rzeczna jasna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'umiarkowanie nawilżona'
        groundAdds = 'pieczywo fluo'
        worms = 'biały, ochotka'
        strainer = 'brak'
        strainerSize = 'brak'
        groundBaitL = 0.75
        clayL = 0.75
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.4
        groundAddsL = 0.05
        wormsL = 0.05
      } else {
        groundBait = 'Lorpio Extra'
        clay = 'rzeczna jasna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'umiarkowanie nawilżona'
        groundAdds = 'pieczywo fluo'
        worms = 'biały'
        strainer = 'brak'
        strainerSize = 'brak'
        groundBaitL = 0.5
        clayL = 1
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.4
        groundAddsL = 0.05
        wormsL = 0.05
      }
    }
    if (this.props.spicies === "Ryby karpiowate małe") {
      if ((this.props.partOfTheYear === "Wiosna") ||
        (this.props.partOfTheYear === "Lato")) {
        groundBait = 'Seans Noire'
        clay = 'rzeczna ciemna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'brak'
        worms = 'pinka, ochotka'
        strainer = 'tak'
        strainerSize = '2x2 mm'
        groundBaitL = 0.75
        clayL = 0.75
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.5
        groundAddsL = 0
        wormsL = 0.05
      } else {
        groundBait = 'Seans Noire'
        clay = 'rzeczna ciemna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'konopie'
        worms = 'pinka, ochotka'
        strainer = 'tak'
        strainerSize = '2x2 mm'
        groundBaitL = 0.25
        clayL = 1
        groundL = 0.75
        bentoniteL = 0.02
        waterL = 0.5
        groundAddsL = 0.02
        wormsL = 0.03
      }
    }
    if (this.props.spicies === "Ryby karpiowate duże") {
      if ((this.props.partOfTheYear === "Wiosna") ||
        (this.props.partOfTheYear === "Lato")) {
        groundBait = 'Seans Gros Gardon'
        clay = 'rzeczna jasna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'pieczywo fluo'
        worms = 'biały, ochotka'
        strainer = 'tak'
        strainerSize = '3x3 mm'
        groundBaitL = 0.75
        clayL = 1.25
        groundL = 0
        bentoniteL = 0.02
        waterL = 0.5
        groundAddsL = 0.05
        wormsL = 0.05
      } else {
        groundBait = 'Seans Gros Gardon'
        clay = 'rzeczna ciemna'
        ground = 'ziemia tofowa'
        bentonite = 'tak'
        water = 'dobrze nawilżona'
        groundAdds = 'pieczywo fluo'
        worms = 'biały, ochotka'
        strainer = 'tak'
        strainerSize = '3x3 mm'
        groundBaitL = 0.5
        clayL = 1
        groundL = 0.5
        bentoniteL = 0.02
        waterL = 0.5
        groundAddsL = 0.03
        wormsL = 0.03
      }
    }
    //ilość zanęty w stosunku do czasu połowu
    if (this.props.timeOfFishing === "3 godz") {
      groundBaitL *= 1.5
      clayL *= 1.5
      groundL *= 1.5
      bentoniteL *= 1.5
      bentoniteL.toFixed(2)
      waterL *= 1.5
      groundAddsL *= 1.5
      wormsL *= 1.5
    } else if (this.props.timeOfFishing === "4 godz") {
      groundBaitL *= 2
      clayL *= 2
      groundL *= 2
      bentoniteL *= 2
      bentoniteL.toFixed(2)
      waterL *= 2
      groundAddsL *= 2
      wormsL *= 2
    } else if (this.props.timeOfFishing === "pow 5 godz") {
      groundBaitL *= 2.5
      clayL *= 2.5
      groundL *= 2.5
      bentoniteL *= 2.5
      bentoniteL.toFixed(2)
      waterL *= 2.5
      groundAddsL *= 2.5
      wormsL *= 2.5
    }
    //ilość zanęty w stosunku do rodzaju połowu
    if ((this.props.typeOfCatch === "Oficjalny trening") || (this.props.typeOfCatch === "Zawody")) {
      groundBaitL *= 2
      groundBaitL.toFixed(2)
      clayL *= 2
      clayL.toFixed(2)
      groundL *= 2
      groundL.toFixed(2)
      bentoniteL *= 2
      bentoniteL.toFixed(2)
      waterL *= 2
      waterL.toFixed(2)
      groundAddsL *= 2
      groundAddsL.toFixed(2)
      wormsL *= 2
      wormsL.toFixed(2)
    } else{
      groundBaitL *= 2
      groundBaitL.toFixed(2)
      clayL *= 2
      clayL.toFixed(2)
      groundL *= 2
      groundL.toFixed(2)
      bentoniteL *= 2
      bentoniteL.toFixed(2)
      waterL *= 2
      waterL.toFixed(2)
      groundAddsL *= 2
      groundAddsL.toFixed(2)
      wormsL *= 2
      wormsL.toFixed(2)
    }
    //ilość bentonitu w stosunku do głębokości
    if ((this.props.depthMax === "1") ||
      (this.props.depthMax === "2") ||
      (this.props.depthMax === "3") ||
      (this.props.depthMax === "4") ||
      (this.props.depthMax === "5")) {
      bentoniteL *=1
      bentoniteL.toFixed(2)
    } else {
    bentoniteL *= 1.5
    bentoniteL.toFixed(2)
    }
    //ilość bentonitu w stosunku do szybkości rzeki
    if ((this.props.riverPull === "1g") ||
      (this.props.riverPull === "2g") ||
      (this.props.riverPull === "3g") ||
      (this.props.riverPull === "4g") ||
      (this.props.riverPull === "5g")) {
      bentoniteL = ''
    } else if ((this.props.riverPull === "6g") ||
      (this.props.riverPull === "7g") ||
      (this.props.riverPull === "8g") ||
      (this.props.riverPull === "9g") ||
      (this.props.riverPull === "10g")) {
      bentoniteL *= 1.5;
      bentoniteL.toFixed(2)
    } else if ((this.props.riverPull === "11g") ||
      (this.props.riverPull === "12g") ||
      (this.props.riverPull === "13g") ||
      (this.props.riverPull === "14g") ||
      (this.props.riverPull === "15g")) {
      bentoniteL *= 1.25;
      bentoniteL.toFixed(2)
    } else {
      bentoniteL *= 2;
      bentoniteL.toFixed(2)
    }

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
          <div class="col-sm-10 col-md-5 mt-5">
          <div className="row mb-4 justify-content-center">
              <div className="col-3 "></div>
              <div className="col-4 mr-5 text-warning font-weight-bolder">nazwa produktu</div>
              <div className="col-3 text-warning font-weight-bolder">ilość (L)</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder">zanęta:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{groundBait}</div>
              <div className="col-3 border border-warning bg-dark text-white">{groundBaitL}</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder">glina:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{clay}</div>
              <div className="col-3 border border-warning bg-dark text-white">{clayL}</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder">ziemia:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{ground}</div>
              <div className="col-3 border border-warning bg-dark text-white">{groundL}</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder" >bentonit:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{bentonite}</div>
              <div className="col-3 border border-warning bg-dark text-white">{bentoniteL}</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder">woda:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{water}</div>
              <div className="col-3 border border-warning bg-dark text-white">{waterL}</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder">dodatki:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{groundAdds}</div>
              <div className="col-3 border border-warning bg-dark text-white">{groundAddsL}</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder">robaki:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{worms}</div>
              <div className="col-3 border border-warning bg-dark text-white">{wormsL}</div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-3 text-warning font-weight-bolder">sito:</div>
              <div className="col-4 mr-5 border border-warning bg-dark text-white">{strainer}</div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}