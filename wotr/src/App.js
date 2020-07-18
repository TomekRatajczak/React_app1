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
      fishingForm: {}
    };
  }
  handleOnChangeState = fishingFormState => {
    this.setState({
      fishingForm: fishingFormState
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
        <DepthTest
          {...depthTest}
        />
        <FloatSets {...floatSets} />
        <Groundbait {...groundbait} state={...this.state.fishingForm} />
        <Tactics {...tactics} />
        <Footer {...contact} {...contactDetails} />
      </div>
    );
  }
}

