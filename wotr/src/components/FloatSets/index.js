import React from 'react';
import s from './style.module.css';


export default class FloatSets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      floatSet: this.props.floatSet
    };
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    console.log("event", event.target);
    console.log("this.state", this.state);
  };

  handleOnFloatSetChange = event => {
    this.setState({
      floatSet: event.target.value
    });
  };

  render() {
    let spławik = ''
    if (this.state.floatSet === "Klasyczna przepływanka") {
      spławik = " typu Bombka"
    } else if (this.state.floatSet === "Przepływanka z przytrzymaniem") {
      spławik = " typu Cralusso Surf"
    } else if (this.state.floatSet === "Przepływanka z przytrzymaniem i wpuszczeniem") {
      spławik = " typu Cralusso Surf lub Dysk"
    } else if (this.state.floatSet === "Technika na stopa") {
      spławik = " typu Dysk"
    }

    let mainLine = ''
    let hookLine = ''
    let hookSize = ''
    if (this.props.spicies === "Ukleja") {
      mainLine = ' 0,1 mm'
      hookLine = ' 0,08 mm x 10cm'
      hookSize = ' Nr.22'
    } else if (this.props.spicies === "Płoć") {
      mainLine = ' 0,12 mm'
      hookLine = ' 0,1 mm x 15cm'
      hookSize = ' Nr.18'
    } else if (this.props.spicies === "Krąp") {
      mainLine = ' 0,12 mm'
      hookLine = ' 0,1 mm x 20xm'
      hookSize = ' Nr.16'
    } else if ((this.props.spicies === "Leszcz") || (this.props.spicies === "Kleń, Jaź, Brzana")) {
      mainLine = ' 0,16 mm'
      hookLine = ' 0,14 mm x 40cm'
      hookSize = ' Nr.14'
    } else if (this.props.spicies === "Ryby karpiowate małe") {
      mainLine = ' 0,1 mm'
      hookLine = ' 0,08 mm x 25cm'
      hookSize = ' Nr.18'
    } else if (this.props.spicies === "Ryby karpiowate duże") {
      mainLine = ' 0,18 mm'
      hookLine = ' 0,14 mm x 35cm'
      hookSize = ' Nr.12'
    }


    let weightBig = ''
    let weightMid = ''
    let weightMin = ''
    //dokończyć wyważanie spławików
    if (this.props.riverPull === "1g") {
      weightBig = " 0,6 g"
      weightMid = ' 0,2 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "2g") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "3g") {
      weightBig = " 2,4 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "4g") {
      weightBig = " 3,4 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "5g") {
      weightBig = " 4,0 g"
      weightMid = ' 0,8 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "6g") {
      weightBig = " 5,0 g"
      weightMid = ' 0,8 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "7g") {
      weightBig = " 6,0 g"
      weightMid = ' 0,8 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "8g") {
      weightBig = " 6,0 g"
      weightMid = ' 1,6 g'
      weightMin = ' 2 x 0,2 g'
    } else if (this.props.riverPull === "9g") {
      weightBig = " 7,0 g"
      weightMid = ' 1,6 g'
      weightMin = ' 2 x 0,2 g'
    } else if (this.props.riverPull === "10g") {
      weightBig = " 8,0 g"
      weightMid = ' 1,6 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "11g") {
      weightBig = " 10,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "12g") {
      weightBig = " 11,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "13g") {
      weightBig = " 12,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "14g") {
      weightBig = " 13,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "15g") {
      weightBig = " 14,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "16g") {
      weightBig = " 15,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "17g") {
      weightBig = " 16,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "18g") {
      weightBig = " 17,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "19g") {
      weightBig = " 18,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "20g") {
      weightBig = " 19,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    } else if (this.props.riverPull === "21g") {
      weightBig = " 20,0 g"
      weightMid = ' 0,4 g'
      weightMin = ' 3 x 0,2 g'
    }
    return(
      <div className = { s.root } >
      <div className="container"></div>
      <h2 className="mb-5 text-center">Zestawy</h2>
      <div className="row justify-content-center">

        <div class="col-sm-11 col-md-5 mt-5">
          <form className="form-group" onSubmit={this.handleOnSubmit}>
            <label for="Technika prowadzenia przynęty">Technika prowadzenia przynęty:</label>
            <select class="form-control border border-warning bg-dark text-white" id="Technika prowadzenia przynęty" value={this.state.value} onChange={this.handleOnFloatSetChange}>
              <option value=""></option>
              <option value="Klasyczna przepływanka">Klasyczna przepływanka</option>
              <option value="Przepływanka z przytrzymaniem">Przepływanka z przytrzymaniem</option>
              <option value="Przepływanka z przytrzymaniem i wpuszczeniem">Przepływanka z przytrzymaniem i wpuszczeniem</option>
              <option value="Technika na stopa">Technika na stopa</option>
            </select>
            <div className="row mt-5 mb-5 justify-content-center">
              <button className="mt-4 btn btn-warning btn-primary btn-lg" type="submit" value="Submit">Zatwierdź</button>
            </div>
          </form>
          <div className="row mb-3 justify-content-center">
            <div className="col-5 text-warning font-weight-bolder">żyłka główna:</div>
            <div className="col-6 border border-warning bg-dark text-white">{mainLine}</div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-5 text-warning font-weight-bolder">spławik:</div>
            <div className="col-6 border border-warning bg-dark text-white">{spławik} {this.props.riverPull}</div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-5 text-warning font-weight-bolder">obciążenie główne:</div>
            <div className="col-6 border border-warning bg-dark text-white">{weightBig}</div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-5 text-warning font-weight-bolder" >obciążenie dodatkowe:</div>
            <div className="col-6 border border-warning bg-dark text-white">{weightMid}</div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-5 text-warning font-weight-bolder"> obiążenie sygnalizacyjne:</div>
            <div className="col-6 border border-warning bg-dark text-white">{weightMin}</div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-5 text-warning font-weight-bolder">przypon:</div>
            <div className="col-6 border border-warning bg-dark text-white">{hookLine}</div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-5 text-warning font-weight-bolder">haczyk:</div>
            <div className="col-6 border border-warning bg-dark text-white">{hookSize}</div>
          </div>
        
        </div>
        <div class="col-sm-12 col-md-6 mt-5">
          <h3 className="mb-4 text-center text-warning">Techniki prowadzenia zestawu:</h3>
          <div class="mb-4 mx-auto col-10 embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zHnylpVH12w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

      </div>
      </div>
    )
  }
}