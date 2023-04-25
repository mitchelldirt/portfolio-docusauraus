import React from 'react';
import styles from './CallToAction.module.css';

const callToActions = [
  {
    text: 'View my other projects',
    link: '/projects',
  },
  {
    text: 'View my skills',
    link: '/docs/Skills/My-Favorite-Tech-Stack',
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