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
    altText: 'leszcz',
    caption: 'Łowienie na rzece wcale nie jest takie trudne jak ci się wydaje...'
  },
  {
    src: require('./img/2.jpg'),
    altText: 'spławiki',
    caption: 'Jeżeli chcesz dowiedzieć się jak skutecznie łowić w każdych warunkach...'
  },
  {
    src: require('./img/3.jpg'),
    altText: 'wędkarz',
    caption: 'Jeżeli nie chcesz być kolejnym Januszem nad wodą...'
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
        <img className={s.picture} src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



  return (
    <div className={s.root}>
      <div className={s.hero}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;