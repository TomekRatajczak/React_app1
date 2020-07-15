import React from 'react';
import s from './style.module.css';
import Animation from '../AnimationForm';


export default function DepthTest({title, subtitle}) {
  return (
    <div className={s.root}>
      <div className="container"></div>
      <h2 className="mb-5 text-center">{title}</h2>
      <div className="row justify-content-center">
        <div class="col-sm-12 col-md-6">
          <Animation/>
        </div>
        <div class="col-sm-10 col-md-5">
          <form className="form-group">
            <label for="Głębokość minimalna w metrach">Głębokość minimalna w metrach:</label>
            <select class="form-control" id="Głębokość minimalna w metrach">    
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
          </form>
          <form className="form-group">
            <label for="Głębokość maksymalna w metrach">Głębokość maksymalna w metrach:</label>
            <select class="form-control" id="Głębokość maksymalna w metrach">    
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
          </form>
          <form className="form-group">
            <label for="Uciąg wody w gramach">Uciąg wody w gramach:</label>
            <select class="form-control" id="Uciąg wody w gramach">   
              <option value="1">1g</option>
              <option value="2">2g</option>
              <option value="3">3g</option>
              <option value="4">4g</option>
              <option value="5">5g</option>
              <option value="6">6g</option>
              <option value="7">7g</option>
              <option value="8">8g</option>
              <option value="9">9g</option>
              <option value="10">10g</option>
              <option value="11">11g</option>
              <option value="12">12g</option>
              <option value="13">13g</option>
              <option value="14">14g</option>
              <option value="15">15g</option>
              <option value="16">16g</option>
              <option value="17">17g</option>
              <option value="18">18g</option>
              <option value="19">19g</option>
              <option value="20">20g</option>
              <option value="21">pow 20g</option>
            </select>
          </form>
          <form className="form-group">
            <label for="Charakterystyka dna">Charakterystyka dna:</label>
            <select class="form-control" id="Charakterystyka dna">     
              <option value="Płaskie">Płaskie</option>
              <option value="Wznoszące">Wznoszące</option>
              <option value="Opadające">Opadające</option>
              <option value="Duże różnice głębokości">Duże różnice głębokości</option>
            </select>
          </form>
          <form className="form-group">
            <label for="Podwodne zaczepy">Podwodne zaczepy:</label>
            <select class="form-control" id="Podwodne zaczepy">     
              <option value="Brak">Brak</option>
              <option value="Kamienie">Kamienie</option>
              <option value="Roślinność">Roślinność</option>
              <option value="Faszyna itp">Faszyna itp</option>
            </select>
          </form>
          <p>{subtitle}</p>
        </div>
        </div>
      
    </div>
  )
}