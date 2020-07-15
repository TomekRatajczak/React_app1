import React from 'react';
import s from './style.module.css';


export default function Tactics({ title }) {
  return (
    <div className={s.root}>
      <div className="container">
        <h2 className="mb-5 text-center">{title}</h2>
        <p>Aby skutecznie łowić PŁÓĆ ZIMA należy przestrzegać kilku następujączych zasad:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, mi ut vulputate egestas, enim nunc hendrerit libero, sed pellentesque eros nulla at urna. Cras ornare vel mauris at volutpat. Nullam id fermentum nunc. Suspendisse scelerisque non urna sed egestas. Nullam leo urna, efficitur non tortor sit amet, laoreet cursus elit. In consectetur hendrerit libero, vel tempor lorem fringilla et. Ut vitae lacus lorem. Donec et orci varius, efficitur justo ut, rhoncus mauris. Fusce ut tincidunt neque. Vestibulum in metus sit amet ex sollicitudin viverra quis nec mauris. Sed fringilla odio eu sapien gravida ornare. Curabitur et leo arcu.
        </p>
        
        <img className="rounded mx-auto d-block img-fluid" src="http://www.fishingfanatics.pl/wp-content/uploads/2016/09/DSC_5781.jpg" />
        
        <p>Maecenas augue mi, convallis sed ex at, aliquet auctor elit. Integer ante tellus, mollis quis tincidunt ac, luctus eu mauris. Nunc consectetur quis tellus ut vehicula. Phasellus quis sem at dolor venenatis vehicula. Nulla eu nibh ullamcorper, vehicula tellus eget, iaculis nisl. Morbi suscipit a augue vel fringilla. Proin nec augue lacinia, viverra arcu et, interdum ex. Maecenas eget lorem placerat dui eleifend dignissim. Vivamus feugiat, turpis vitae tristique vehicula, eros diam luctus quam, sit amet ultricies nunc ex et nulla. Phasellus tincidunt, metus et aliquet lacinia, libero nisi porttitor dui, vitae dictum nulla urna id nibh. Nam nec dolor mauris. Curabitur ullamcorper iaculis mi fringilla feugiat. Suspendisse faucibus condimentum mauris et feugiat. Nulla a egestas elit.</p>
        
        <img className="rounded mx-auto d-block img-fluid" src="https://dariuszciechanskiwedkarstwo.files.wordpress.com/2016/03/diagramy.jpg" />
        
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a tortor quam. Vivamus nulla mauris, commodo sed felis et, lacinia interdum sapien. Nam facilisis pellentesque neque vel tempor. Curabitur ac ex urna. Nulla eu tellus iaculis, porttitor augue vitae, interdum erat. Pellentesque id magna mauris. Suspendisse urna ante, consequat a nisi eu, convallis porttitor turpis. Etiam ullamcorper fringilla lacus eget semper. Nunc finibus faucibus sem a tempor. Aliquam id orci interdum, aliquet libero quis, convallis dolor. Etiam elementum ante laoreet eros aliquam sodales. Phasellus gravida pulvinar purus ut eleifend. Nunc nisl mauris, congue non nisi et, mollis eleifend orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
        
        <img className="rounded mx-auto d-block img-fluid" src="https://gorek-gliny.pl/wp-content/uploads/2018/12/IMG_8101.jpg" />
       
        <p>Duis ut sapien aliquet, elementum nisi in, pulvinar libero. Morbi dui libero, tristique nec risus nec, imperdiet rutrum nibh. Aenean volutpat sem id fermentum condimentum. Nulla lobortis, odio sed elementum mattis, sem est egestas ipsum, at interdum mauris odio nec velit. Nam in odio pharetra, finibus eros et, sollicitudin urna. Nam sagittis eu lorem sed faucibus. Sed ac ante luctus, bibendum tortor et, ultricies odio. Nunc et fringilla arcu. Fusce dictum lectus lorem, ac imperdiet tortor luctus sit amet.</p>
      </div>
    </div>
  )
}