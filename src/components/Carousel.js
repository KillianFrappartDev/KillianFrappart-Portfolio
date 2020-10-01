import React from 'react';

import carouselStyles from '../styles/Carousel.module.scss';

const Carousel = (props) => {
  return (
    <div className={carouselStyles.container}>
      <a className={carouselStyles.icon}>
        <i className="fas fa-chevron-left"></i>
      </a>
      <div className={carouselStyles.wrapper}>
        <img className={carouselStyles.image} src="project-1.png" />
        <div className={carouselStyles.left} />
        <div className={carouselStyles.right} />
      </div>
      <a className={carouselStyles.icon}>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Carousel;
