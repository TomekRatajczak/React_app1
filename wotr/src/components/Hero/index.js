import React from 'react';
import s from './style.module.css';

export default function Hero({title,subtitle,button,images}) {
  return (
    <div className={s.root}>
      <div className={s.bg} style={{backgroundImage: `url(${images[0]})`}}/>
      <div className="d-flex align-items-center h-100">
        <div className={s.text}>
          <h2>{title}</h2>
          <div className="mt-4 mb-4">{subtitle}</div>
          <button className="btn btn-primary btn-lg btn-warning">{button}</button>
        </div>
      </div>
    </div>
      
  
  )
}