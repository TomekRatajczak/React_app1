import React from 'react';
import s from './style.module.css';

import Navigation from './Navigation';

// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default function Header({ logo, menu }) {
  return (
    <div className={s.Header}>

      <nav className="navbar justify-content-between align-items-center navbar-expand-md navbar-dark bg-dark">
        <div className={s.logo}>{logo}</div>
        <div>
          <Navigation menu={menu} />
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>


    </div>


  )
}