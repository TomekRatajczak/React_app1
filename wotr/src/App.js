import React from 'react';
import './App.css';
import { homepage } from './homepage.const.js';

import Header from './components/Header';
import Hero from './components/Hero';
import Weather from './components/Weather';
import FishingForm from './components/FishingForm';
import AnimationForm from './components/AnimationForm';
import DepthTest from './components/DepthTest';
import FloatSets from './components/FloatSets';
import Groundbait from './components/Groundbait';
import Tactics from './components/Tactics';
import Footer from './components/Footer';
import s from './app.module.css';

function App() {
  const {
    companyName,
    navigation,
    hero,
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
      <Weather {...weather} />
      <FishingForm {...fishingForm} />
      <AnimationForm />
      <DepthTest {...depthTest} />
      <FloatSets {...floatSets} />
      <AnimationForm />
      <AnimationForm />
      <Groundbait {...groundbait} />
      <Tactics {...tactics} />
      <Footer {...contact} {...contactDetails} />
    </div>
  );
}

export default App;
