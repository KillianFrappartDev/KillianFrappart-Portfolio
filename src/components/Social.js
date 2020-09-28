import React from 'react';
import { Helmet } from 'react-helmet';

import socialStyles from '../styles/Social.module.scss';

const Social = () => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className={socialStyles.container}>
        <ul className={socialStyles.list}>
          <li className={socialStyles.item}>
            <a
              href="https://www.linkedin.com/in/killian-frappart-720a538b/"
              target="blank"
              className={socialStyles.icon}>
              <i class="fab fa-linkedin fa-3x"></i>
            </a>
          </li>
          <li className={socialStyles.item}>
            <a
              href="https://dev.to/killianfrappartdev"
              target="blank"
              className={socialStyles.icon}>
              <i class="fab fa-dev fa-3x"></i>
            </a>
          </li>
          <li className={socialStyles.item}>
            <a
              href="https://github.com/KillianFrappartDev"
              target="blank"
              className={socialStyles.icon}>
              <i class="fab fa-github fa-3x"></i>
            </a>
          </li>
          <li className={socialStyles.line}></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Social;
