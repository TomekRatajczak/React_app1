import React from 'react';
import s from './style.module.css';

export default function Navigation({menu}) {
  return (
    <ul className={s.navigation}>
      {menu.map((item)=>(
        <li>
          <a href={item.link}>{item.title}</a>        
        </li>
      ))}
    </ul>
  )
}