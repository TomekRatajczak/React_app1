import React from 'react';
import './App.css';
import { homepage } from './homepage.const.js';
import { Button } from 'reactstrap';

import Header from './components/Header';
import Hero from './components/Hero';
import Weather from './components/Weather';
import FishingForm from './components/FishingForm';
import About from './components/About';
import DepthTest from './components/DepthTest';
import FloatSets from './components/FloatSets';
import Groundbait from './components/Groundbait';
import Tactics from './components/Tactics';
import Footer from './components/Footer';
import s from './app.module.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fishingForm: {},
      depthTest: {},
      floatSets: {}
    };
  }
  handleOnChangeState = fishingFormState => {
    this.setState({
      fishingForm: fishingFormState
    }, () => console.log("this.state", this.state)
    );
  };
  handleOnChangeDepthTestState = depthTestState => {
    this.setState({
      depthTest: depthTestState
    }, () => console.log("this.state", this.state)
    );
  };
  handleOnChangeFloatSets = floatSetsState => {
    this.setState({
      floatSets: floatSetsState
    }, () => console.log("this.state", this.state)
    );
  };
  render() {
    const {
      companyName,
      navigation,
      hero,
      about,
      weather,
      fishingForm,
      depthTest,
      floatSets,
      groundbait,
      tactics,
      contact,
      contactDetails,
    } = homepage;
    return (
      <div className="">
        <Header logo={companyName} menu={navigation} />
        <Hero {...hero} />
        <About {...about} />
        <Weather {...weather} />
        <FishingForm {...fishingForm} onSubmit={this.handleOnChangeState.bind(this)} state={this.state.fishingForm}/>
        <DepthTest {...depthTest} onSubmit={this.handleOnChangeDepthTestState.bind(this)} state={this.state.depthTest}/>
        <FloatSets {...floatSets} onSubmit={this.handleOnChangeFloatSets.bind(this)} state={this.state.floatSets} {...this.state.depthTest} {...this.state.fishingForm} />
        <Groundbait {...groundbait} {...this.state.depthTest} {...this.state.fishingForm} />
        <Tactics {...tactics} {...this.state.depthTest} {...this.state.floatSets} {...this.state.fishingForm} />
        <Footer {...contact} {...contactDetails} />
      </div>
    );
  }
}

