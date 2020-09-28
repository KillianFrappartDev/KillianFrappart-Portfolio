import React from 'react';

import Nav from '../components/Nav';
import Social from '../components/Social';
import homeStyles from '../styles/Home.module.scss';
import '../styles/index.scss';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.shadow}>
        <Nav />
        <Social />
        <div className={homeStyles.header}>
          <div className={homeStyles.corner}>
            <div className={homeStyles.horizontal}></div>
            <div className={homeStyles.vertical}></div>
          </div>
          <h1 className={homeStyles.title}>Full-Stack Developer</h1>
          <div className={homeStyles.corner}>
            <div className={homeStyles.horizontal}></div>
            <div className={homeStyles.vertical}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
