import React from 'react';
import s from './style.module.css';



export default class DepthTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      depthMax: this.props.depthMax,
      depthMin: this.props.depthMin,
      riverPull: this.props.riverPull,
      typeOfBottom: this.props.typeOfBottom,
      underwaterHooks: this.props.underwaterHooks
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    console.log("event", event.target);
    console.log("this.state", this.state);
  };

  handleOnDepthMaxChange = event => {
    this.setState({
      depthMax: event.target.value
    });
  };
  
  handleOnDepthMinChange = event => {
    this.setState({
      depthMin: event.target.value
    });
  };

  handleOnRiverPullChange = event => {
    this.setState({
      riverPull: event.target.value
    });
  };

  handleOnTypeOfBottomChange = event => {
    this.setState({
      typeOfBottom: event.target.value
    });
  };

  handleOnUnderwaterHooksChange = event => {
    this.setState({
      underwaterHooks: event.target.value
    });
  };

  render(){
    return (
      <div className={s.root}>
        <div className="container"></div>
        <h2 className="mb-5 text-center">Gruntowanie</h2>
        <div className="row justify-content-center">
          <div class="col-sm-12 col-md-6">
          <h3 className="mb-4 text-center text-warning">Techniki gruntowania:</h3>
            <div class="mb-4 mx-auto col-10 embed-responsive embed-responsive-16by9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/wyjSTcK_gAc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-sm-10 col-md-5">
            <form className="form-group" onSubmit={this.handleOnSubmit}>
              <label for="Głębokość minimalna w metrach">Głębokość minimalna w metrach:</label>

              <select className="form-control border border-warning bg-dark text-white" id="Głębokość minimalna w metrach" value={this.state.depthMin} onChange={this.handleOnDepthMinChange}>
                <option value=""></option>
                <option value="1">1m</option>
                <option value="2">2m</option>
                <option value="3">3m</option>
                <option value="4">4m</option>
                <option value="5">5m</option>
                <option value="6">6m</option>
                <option value="7">7m</option>
                <option value="8">8m</option>
                <option value="9">9m</option>
                <option value="10">10m</option>
              </select>

              <label for="Głębokość maksymalna w metrach">Głębokość maksymalna w metrach:</label>
              <select className="form-control border border-warning bg-dark text-white" id="Głębokość maksymalna w metrach" value={this.state.depthMax} onChange={this.handleOnDepthMaxChange}>
                <option value=""></option>
                <option value="1">1m</option>
                <option value="2">2m</option>
                <option value="3">3m</option>
                <option value="4">4m</option>
                <option value="5">5m</option>
                <option value="6">6m</option>
                <option value="7">7m</option>
                <option value="8">8m</option>
                <option value="9">9m</option>
                <option value="10">10m</option>
              </select>

              <label for="Uciąg wody w gramach">Uciąg wody w gramach:</label>
              <select className="form-control border border-warning bg-dark text-white" id="Uciąg wody w gramach" value={this.state.riverPull} onChange={this.handleOnRiverPullChange}>
                <option value=""></option>
                <option value="1g">1g</option>
                <option value="2g">2g</option>
                <option value="3g">3g</option>
                <option value="4g">4g</option>
                <option value="5g">5g</option>
                <option value="6g">6g</option>
                <option value="7g">7g</option>
                <option value="8g">8g</option>
                <option value="9g">9g</option>
                <option value="10g">10g</option>
                <option value="11g">11g</option>
                <option value="12g">12g</option>
                <option value="13g">13g</option>
                <option value="14g">14g</option>
                <option value="15g">15g</option>
                <option value="16g">16g</option>
                <option value="17g">17g</option>
                <option value="18g">18g</option>
                <option value="19g">19g</option>
                <option value="20g">20g</option>
                <option value="21g">pow 20g</option>
              </select>

              <label for="Charakterystyka dna">Charakterystyka dna:</label>
              <select className="form-control border border-warning bg-dark text-white" id="Charakterystyka dna" value={this.state.typeOfBottom} onChange={this.handleOnTypeOfBottomChange}>
                <option value=""></option>
                <option value="Płaskie">Płaskie</option>
                <option value="Wznoszące">Wznoszące</option>
                <option value="Opadające">Opadające</option>
                <option value="Duże różnice głębokości">Duże różnice głębokości</option>
              </select>

              <label for="Podwodne zaczepy">Podwodne zaczepy:</label>
              <select className="form-control border border-warning bg-dark text-white" id="Podwodne zaczepy" value={this.state.underwaterHooks} onChange={this.handleOnUnderwaterHooksChange}>
                <option value=""></option>
                <option value="Brak">Brak</option>
                <option value="Kamienie">Kamienie</option>
                <option value="Roślinność">Roślinność</option>
                <option value="Faszyna itp">Faszyna itp</option>
              </select>
              <div className="row mt-5 justify-content-center">
                <button className="mt-4 btn btn-warning btn-primary btn-lg" type="submit" value="Submit">Zatwierdź</button>
              </div>
            </form>
            <p>Tu będzie tekst</p>
          </div>
        </div>

      </div>
    )
  }
}