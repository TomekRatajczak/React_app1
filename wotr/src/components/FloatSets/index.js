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
      spławik = " typu Dysk"
    } else if (this.state.floatSet === "Technika na stopa") {
      spławik = " typu Cralusso Surf lub Dysk"
    }

    let mainLine = ''
    let hookLine = ''
    let hookSize = ''
    if (this.props.spicies === "Ukleja") {
      mainLine = ' 0,1 mm'
      hookLine = ' 0,08 mm x 10cm'
      hookSize = ' Nr.22'
    }else if (this.props.spicies === "Płoć") {
      mainLine = ' 0,12 mm'
      hookLine = ' 0,1 mm x 15cm'
      hookSize = ' Nr.18'
    }else if (this.props.spicies === "Krąp") {
      mainLine = ' 0,12 mm'
      hookLine = ' 0,1 mm x 20xm'
      hookSize = ' Nr.16'
    }else if (this.props.spicies === "Leszcz" || this.state.spicies === "Kleń, Jaź, Jelec") {
      mainLine = ' 0,16 mm'
      hookLine = ' 0,14 mm x 40cm'
      hookSize = ' Nr.14'
    }else if (this.props.spicies === "Ryby karpiowate małe") {
      mainLine = ' 0,1 mm'
      hookLine = ' 0,08 mm x 25cm'
      hookSize = ' Nr.18'
    }else if (this.props.spicies === "Ryby karpiowate duże") {
      mainLine = ' 0,18 mm'
      hookLine = ' 0,14 mm x 35cm'
      hookSize = ' Nr.12'
    }


    let weightBig = ''
    let weightMid = ''
    let weightMin = ''
    //dokończyć wyważanie spławików
    if (this.props.riverPull === "1") {
      weightBig = " 0,6 g"
      weightMid = ' 0,2 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "2") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "3") {
      weightBig = " 2,4 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "4") {
      weightBig = " 3,4 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "5") {
      weightBig = " 4,0 g"
      weightMid = ' 0,8 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "6") {
      weightBig = " 5,0 g"
      weightMid = ' 0,8 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "7") {
      weightBig = " 6,0 g"
      weightMid = ' 0,8 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "8") {
      weightBig = " 6,0 g"
      weightMid = ' 1,6 g'
      weightMin = ' 2 x 0,2 g'
    } else if (this.props.riverPull === "9") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "10") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "11") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "12") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "13") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "14") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "15") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "16") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    } else if (this.props.riverPull === "17") {
      weightBig = " 1,6 g"
      weightMid = ' 0,4 g'
      weightMin = ' 2 x 0,1 g'
    }
    return (
      <div className={s.root}>
        <div className="container"></div>
        <h2 className="mb-5 text-center">Zestawy</h2>
        <div className="row justify-content-center">

          <div class="col-sm-10 col-md-5 ">
            <form className="form-group" onSubmit={this.handleOnSubmit}>
              <label for="Technika prowadzenia przynęty">Technika prowadzenia przynęty:</label>
              <select class="form-control border border-warning bg-dark text-white" id="Technika prowadzenia przynęty" value={this.state.value} onChange={this.handleOnFloatSetChange}>
                <option value="Klasyczna przepływanka">Klasyczna przepływanka</option>
                <option value="Przepływanka z przytrzymaniem">Przepływanka z przytrzymaniem</option>
                <option value="Przepływanka z przytrzymaniem i wpuszczeniem">Przepływanka z przytrzymaniem i wpuszczeniem</option>
                <option value="Technika na stopa">Technika na stopa</option>
              </select>
              <button className="mt-4 btn btn-warning btn-primary btn-lg" type="submit" value="Submit">Zatwierdź</button>
            </form>
            <div>Obrazek</div>
            <ul>
              <li>żyłka główna: {mainLine}</li>
              <li>spławik: {spławik} {this.props.riverPull}</li>
              <li>obciążenie główne: {weightBig}</li>
              <li>obciążenie dodatkowe:{weightMid}</li>
              <li>obiążenie sygnalizacyjne:{weightMin}</li>
              <li>przypon; {hookLine}</li>
              <li>haczyk: {hookSize}</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6">
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