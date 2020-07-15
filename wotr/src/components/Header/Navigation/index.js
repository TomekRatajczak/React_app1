import React from 'react';
import s from './style.module.css';

export default function Navigation({menu}) {
  return (
    <div className="collapse navbar-collapse" id="mainMenu">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {menu.map((item)=>(
          <li className="nav-item">
            <a className="nav-link" href={item.link}>{item.title}</a>        
          </li>
        ))}
      </ul>
    </div>
  )
}