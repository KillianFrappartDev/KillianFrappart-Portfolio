import React from 'react';

import Background from '../components/Background';
import skillsStyles from '../styles/skills.module.scss';

const skills = () => {
  return (
    <Background>
      <section className={skillsStyles.container}>
        <div className={skillsStyles.set}>
          <h2 className={skillsStyles.title}>UI/UX</h2>
          <div className={skillsStyles.items}>
            <img
              className={skillsStyles.item}
              src="/skills/html-5.svg"
              alt="HTML5"
            />
            <img
              className={skillsStyles.item}
              src="/skills/css.svg"
              alt="CSS3"
            />
            <img
              className={skillsStyles.item}
              src="/skills/Bootstrap.svg"
              alt="Bootstrap"
            />
            <img
              className={skillsStyles.item}
              src="/skills/mui.svg"
              alt="Material UI"
            />
          </div>
        </div>
        <div className={skillsStyles.set}>
          <h2 className={skillsStyles.title}>Front-End</h2>
          <div className={skillsStyles.items}>
            <img
              className={skillsStyles.item}
              src="/skills/js.svg"
              alt="JavaScript"
            />
            <img
              className={skillsStyles.item}
              src="/skills/react.svg"
              alt="React"
            />
            <img
              className={skillsStyles.item}
              src="/skills/redux.svg"
              alt="Redux"
            />
          </div>
        </div>
        <div className={skillsStyles.set}>
          <h2 className={skillsStyles.title}>Back-End</h2>
          <div className={skillsStyles.items}>
            <img
              className={skillsStyles.small}
              src="/skills/node.png"
              alt="NODEJS"
            />
            <img
              className={skillsStyles.small}
              src="/skills/sql.svg"
              alt="SQL"
            />
            <img
              className={skillsStyles.item}
              src="/skills/mongo.svg"
              alt="MONGO"
            />
          </div>
        </div>
        <div className={skillsStyles.set}>
          <h2 className={skillsStyles.title}>Tools</h2>
          <div className={skillsStyles.items}>
            <img
              className={skillsStyles.item}
              src="/skills/npm.svg"
              alt="NPM"
            />
            <img
              className={skillsStyles.item}
              src="/skills/git.svg"
              alt="GIT"
            />
            <img
              className={skillsStyles.item}
              src="/skills/bash.svg"
              alt="Bash"
            />
            <img
              className={skillsStyles.item}
              src="/skills/vscode.svg"
              alt="VSCode"
            />
          </div>
        </div>
      </section>
    </Background>
  );
};

export default skills;
