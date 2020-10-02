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
        <a
          href={props.items[current].live}
          target="blank"
          className={carouselStyles.left}>
          <span className={carouselStyles.link}>
            <i className="fas fa-play"></i>
          </span>
        </a>
        <a
          href={props.items[current].code}
          target="blank"
          className={carouselStyles.right}>
          <span className={carouselStyles.link}>
            <i className="fas fa-code"></i>
          </span>
        </a>
      </div>
      <div className={carouselStyles.mobileContainer}>
        <a onClick={prev} className={carouselStyles.mobile}>
          <i class="fas fa-arrow-left"></i>
        </a>
        <a href={props.items[current].live} target="blank">
          <button className={carouselStyles.live}>LIVE</button>
        </a>
        <a href={props.items[current].code} target="blank">
          <button className={carouselStyles.code}>CODE</button>
        </a>
        <a onClick={next} className={carouselStyles.mobile}>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <a onClick={next} className={carouselStyles.icon}>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Carousel;
