import React from 'react';
import s from './style.module.css';

export default function About({title, subtitle, subtitle2, button}) {
  return (
    <div className={s.root}>
      <div className="d-flex align-items-center">
        <div className={s.text}>
        <h2 cassName="mb-5 text-center">{title}</h2>
          <div className="mt-4 mb-4">{subtitle}</div>
          <div className="mt-4 mb-4">{subtitle2}</div>
          <button className="btn btn-warning btn-primary btn-lg">{button}</button>
        </div>
      </div>
    </div>
  )
}