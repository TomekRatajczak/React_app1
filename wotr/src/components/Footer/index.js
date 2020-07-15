import React from 'react';
import s from './style.module.css';

// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default function Footer({ title, subtitle, phoneIcon, mailIcon, fbIcon, instIcon, ytIcon, twIcon, phone, email }) {
  return (
    <div className={s.root}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="row justify-content-center">
              <h6>{title}</h6>
              <div className={s.contactDetails}>
                <img src={phoneIcon} />{phone}
              </div>
              <div className={s.contactDetails}>
                <img src={mailIcon} />{email}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row justify-content-center">
              <h6>{subtitle}</h6>
              <div className={s.icons}>
                <img src={fbIcon} />
              </div>
              <div className={s.icons}>
                <img src={instIcon} />
              </div>
              <div className={s.icons}>
                <img src={ytIcon} />
              </div>
              <div className={s.icons}>
                <img src={twIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={s.copywrtih}>Copywrtih Tomasz ratajczak wszelkie prawa zastrzerzone</p>
    </div>
  )
}