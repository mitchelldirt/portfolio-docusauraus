import React from 'react';
import styles from './CallToAction.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const callToActions = [
  {
    text: <Translate id='callToAction.myOtherProjects'>My other projects</Translate>,
    link: translate({
      message: '/projects?project=1',
      id: 'callToAction.myOtherProjects.link',
      description: 'Link to my other projects',
    }),
  },
  {
    text: <Translate id='callToAction.mySkills'>My skills</Translate>,
    link: translate({
      message: '/docs/Skills/My-Favorite-Tech-Stack',
      id: 'callToAction.mySkills.link',
      description: 'Link to my other projects',
    })
  }
];

function CallToAction({ text, link }) {
  return (
    <>
      <a href={link} className={styles.callToAction}>
        <p className={styles.callToActionText}>{text}</p>
      </a>
    </>
  )
}

export default function CallToActionGroup() {
  return (
    <>
      <div className={styles.callToActionGroup}>
        {callToActions.map((cta, idx) => (
          <CallToAction className={styles.callToAction} key={idx} text={cta.text} link={cta.link} />
        ))}
      </div>
    </>
  )
}