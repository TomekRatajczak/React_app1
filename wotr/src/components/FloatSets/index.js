import React from 'react';
import s from './style.module.css';

// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default function FloatSets({ title }) {
  return (
    <div className={s.root}>
      <div className="container"></div>
      <h2 className="mb-5 text-center">{title}</h2>
      <div className="row justify-content-center">

        <div class="col-sm-10 col-md-5 ">
          <form className="form-group">
            <label for="Technika prowadzenia przynęty">Technika prowadzenia przynęty:</label>
            <select class="form-control border border-warning bg-dark text-white" id="Technika prowadzenia przynęty">
              <option value="Klasyczna przepływanka">Klasyczna przepływanka</option>
              <option value="Przepływanka z przytrzymaniem">Przepływanka z przytrzymaniem</option>
              <option value="Przepływanka z przytrzymaniem i wpuszczeniem">Przepływanka z przytrzymaniem i wpuszczeniem</option>
              <option value="Technika na stopa">Technika na stopa</option>
            </select>

          </form>
          <div>Obrazek</div>
          <ul>
            <li>żyłka główna: 0,16 mm</li>
            <li>spławik: Bombka 8g</li>
            <li>obciążenie główne: 5g</li>
            <li>obciążenie dodatkowe: 2,4g</li>
            <li>obiążenie sygnalizacyjne: 3x0,2g</li>
            <li>przypon; 0,12mm x 30cm</li>
            <li>haczyk: nr.14</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zHnylpVH12w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}