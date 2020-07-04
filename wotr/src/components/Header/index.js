import React from 'react';
import s from './style.module.css';

import Navigation from './Navigation';

// export default function Header(props) {
// const logo = props.logo
// const menu = props.menu

export default function Header({logo,menu}) {
  return (
    <div className={s.Header}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
           <div>{logo}</div>
           <div>
             <Navigation menu={menu}/>
           </div>
        </div>
      </div>
      
    </div>
      
    
  )
}