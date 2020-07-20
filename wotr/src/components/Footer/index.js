import React from 'react';
import s from './style.module.css';

// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default function Footer({ title, subtitle, phoneIcon, mailIcon, fbIcon, instIcon, ytIcon, twIcon, phone, email }) {
  return (
    <div className={s.root} id="link4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="row justify-content-center">
              <h6>{title}</h6>
              <div className={s.contactDetails}>
                <img src={phoneIcon} alt="phone"/>{phone}
              </div>
              <div className={s.contactDetails}>
                <img src={mailIcon} alt="mail"/>{email}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row justify-content-center">
              <h6>{subtitle}</h6>
              <div className={s.icons}>
                <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank"><img src={fbIcon} alt="fb"/></a>
              </div>
              <div className={s.icons}>
                <a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank"><img src={instIcon} alt="inst"/></a>
              </div>
              <div className={s.icons}>
                <a href="http://www.youtube.com" rel="noopener noreferrer" target="_blank"><img src={ytIcon} alt="yt"/></a>
              </div>
              <div className={s.icons}>
                <a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank"><img src={twIcon} alt="fb"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={s.copywrtih}>&copy; Tomasz Ratajczak 2020. Zdjęcia i filmy nie są moje ale i tak wszelkie prawa zastrzerzone. </p>
    </div>
  )
}