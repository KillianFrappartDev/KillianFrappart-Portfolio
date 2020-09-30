import React from 'react';

import setStyles from '../styles/SkillSet.module.scss';

const SkillSet = (props) => {
  return (
    <div className={setStyles.container}>
      <div className={setStyles.header}>
        <div></div>
        <h2 className={setStyles.title}>{props.item[0].title}</h2>
        <h2 className={setStyles.cancel} onClick={props.cancel}>
          <i className="fas fa-times"></i>
        </h2>
      </div>
      <p className={setStyles.text}>{props.item[0].text}</p>
      <div className={setStyles.list}>
        {props.item[0].items.map((icon) => (
          <img
            className={setStyles.item}
            src={`/skills/${icon.url}`}
            alt={icon.name}
            key={icon.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
