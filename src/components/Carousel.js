import React, { useState } from 'react';

import carouselStyles from '../styles/Carousel.module.scss';

const Carousel = (props) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(props.items.length - 1);
    }
  };

  const next = () => {
    if (current < props.items.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <div className={carouselStyles.container}>
      <a onClick={prev} className={carouselStyles.icon}>
        <i className="fas fa-chevron-left"></i>
      </a>
      <div className={carouselStyles.wrapper}>
        <img
          className={carouselStyles.image}
          src={props.items[current].imgURL}
        />
        <div className={carouselStyles.left}>
          <a className={carouselStyles.link}>
            <i className="fas fa-play"></i>
          </a>
        </div>
        <div className={carouselStyles.right}>
          <a className={carouselStyles.link}>
            <i className="fas fa-code"></i>
          </a>
        </div>
      </div>
      <a onClick={next} className={carouselStyles.icon}>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Carousel;
