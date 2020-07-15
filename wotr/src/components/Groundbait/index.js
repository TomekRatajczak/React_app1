import React from 'react';
import s from './style.module.css';
import Animation from '../AnimationForm';
// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default function Groundbait({ title }) {
  return (
    <div className={s.root}>
      <div className="container"></div>
      <h2 className="mb-5 text-center">{title}</h2>
      <div className="row justify-content-center">
        <div class="col-sm-12 col-md-6">
          <Animation />
        </div>
        <div class="col-sm-10 col-md-5">
          Zanęta
      </div>
      </div>
    </div>
  )
}