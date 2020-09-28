import React from 'react';

import headerStyles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <section className={headerStyles.header}>
      <div className={headerStyles.corner}>
        <div className={headerStyles.horizontal}></div>
        <div className={headerStyles.vertical}></div>
      </div>
      <h1 className={headerStyles.title}>Full-Stack Developer</h1>
      <div className={headerStyles.corner}>
        <div className={headerStyles.horizontal}></div>
        <div className={headerStyles.vertical}></div>
      </div>
    </section>
  );
};

export default Header;
