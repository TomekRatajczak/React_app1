import React, { useState } from 'react';
import s from './style.module.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: require('./img/1.jpg'),
    altText: 'Łowienie na rzece wcale nie jest takie trudne!',
    caption: 'Jeżeli chcesz dowiedzieć się jak skutecznie łowić w każdych warunkach - kliknij w przycisk poniżej i poznaj nasze techniki'
  },
  {
    src:  require('./img/2.jpg'),
    altText: 'Łowienie na rzece wcale nie jest takie trudne!',
    caption: 'Jeżeli chcesz dowiedzieć się jak skutecznie łowić w każdych warunkach - kliknij w przycisk poniżej i poznaj nasze techniki'
  },
  {
    src:  require('./img/3.jpg'),
    altText: 'Łowienie na rzece wcale nie jest takie trudne!',
    caption: 'Jeżeli chcesz dowiedzieć się jak skutecznie łowić w każdych warunkach - kliknij w przycisk poniżej i poznaj nasze techniki'
  }
];

const Hero = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className=" w-100 vh-100"  src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



  return (

    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators  items={items } activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Hero;