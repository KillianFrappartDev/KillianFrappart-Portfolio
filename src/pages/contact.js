import React from 'react';

import Background from '../components/Background';
import contactStyles from '../styles/Contact.module.scss';

const contact = () => {
  return (
    <Background>
      <div className={contactStyles.container}>
        <a target="blank" href="resume.pdf">
          <button className={contactStyles.resume}>RESUME</button>
        </a>
        <div className={contactStyles.infos}>
          <p className={contactStyles.info}>+32 472 52 18 75</p>
          <p className={contactStyles.info}>Belgium</p>
          <p className={contactStyles.info}>Killian.Frappart@hotmail.com</p>
        </div>
      </div>
    </Background>
  );
};

export default contact;
