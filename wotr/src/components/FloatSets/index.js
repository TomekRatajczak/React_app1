import React from 'react';
import s from './style.module.css';
import PropTypes from 'prop-types';

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
      const spławik = ''
      if(this.state.floatSet === "Klasyczna przepływanka"){
        spławik = "spławik typu bombka"
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
              <li>żyłka główna: 0,16 mm</li>
              <li>spławik: {spławik} {this.props.riverPull}</li>
              <li>obciążenie główne: 5g</li>
              <li>obciążenie dodatkowe: 2,4g</li>
              <li>obiążenie sygnalizacyjne: 3x0,2g</li>
              <li>przypon; 0,12mm x 30cm</li>
              <li>haczyk: nr.14</li>
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