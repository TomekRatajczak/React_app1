import React from 'react';
import s from './style.module.css'
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
        <div class="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1PDMFQAvHXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-sm-10 col-md-5">
          Zanęta
      </div>
      </div>
    </div>
  )
}