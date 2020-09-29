import React, { useState } from 'react';

import Background from '../components/Background';
import SkillSet from '../components/SkillSet';
import skillsStyles from '../styles/skills.module.scss';

const SKILLS = [
  {
    title: 'UI/UX',
    text: 'I like UI/UX I like UI/UX I like UI/UX I like UI/UX',
    items: [
      { name: 'HTML', url: 'html-5.svg' },
      { name: 'CSS', url: 'css.svg' },
      { name: 'Bootstrap', url: 'Bootstrap.svg' },
      { name: 'Material UI', url: 'mui.svg' },
    ],
  },
  {
    title: 'Front-End',
    text: 'I like UI/UX I like UI/UX I like UI/UX I like UI/UX',
    items: [
      { name: 'JavaScript', url: 'js.svg' },
      { name: 'React', url: 'react.svg' },
      { name: 'Redux', url: 'redux.svg' },
    ],
  },
  {
    title: 'Back-End',
    text: 'I like UI/UX I like UI/UX I like UI/UX I like UI/UX',
    items: [
      { name: 'Node', url: 'node.png' },
      { name: 'SQL', url: 'sql.svg' },
      { name: 'Mongo', url: 'mongo.svg' },
    ],
  },
  {
    title: 'Tools',
    text: 'I like UI/UX I like UI/UX I like UI/UX I like UI/UX',
    items: [
      { name: 'NPM', url: 'npm.svg' },
      { name: 'Git', url: 'git.svg' },
      { name: 'Bash', url: 'bash.svg' },
    ],
  },
];

const Skills = () => {
  const [current, setCurrent] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (e) => {
    setCurrent(e.target.innerHTML);
    setIsOpen(true);
  };

  return (
    <Background>
      <section className={skillsStyles.container}>
        {!isOpen ? (
          <ul>
            <li onClick={openHandler}>UI/UX</li>
            <li onClick={openHandler}>Front-End</li>
            <li onClick={openHandler}>Back-End</li>
            <li onClick={openHandler}>Tools</li>
          </ul>
        ) : (
          <SkillSet item={SKILLS.filter((item) => item.title === current)} />
        )}
      </section>
    </Background>
  );
};

export default Skills;
