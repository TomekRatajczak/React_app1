import React from 'react';
import s from './style.module.css';

export default function About({title, subtitle, subtitle2, button}) {
  return (
    <div className={s.root} id="link1">
      <div className="d-flex align-items-center" >
        <div className={s.text} >
        <h2 className="mb-5 text-center">{title}</h2>
          <div className="col-11 mx-auto mt-4 mb-4">{subtitle}</div>
          <div className="mt-4 mb-4">{subtitle2}</div>
          <button className="btn btn-warning btn-primary btn-lg">{button}</button>
        </div>
      </div>
    </div>
  )
}