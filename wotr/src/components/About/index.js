import React from 'react';
import s from './style.module.css';

export default function About({title, subtitle, subtitle2, button}) {
  return (
    <div className={s.root}>
      <div className="d-flex align-items-center h-100">
        <div className={s.text}>
          <h2 className="mb-5">{title}</h2>
          <div className="mt-4 mb-4">{subtitle}</div>
          <div className="mt-4 mb-4">{subtitle2}</div>
          <button className="btn btn-secondary">{button}</button>
        </div>
      </div>
    </div>
  )
}