import React from 'react';
import styles from './styles.module.css';

/* ======================
DATA
======================= */
contactInfo = {
  email: 'developer@mitchellmudd.dev',
  phone: '(616) 990 8844',
  linkedIn: 'https://www.linkedin.com/in/mitchellmudd/',
  github: 'https://github.com/mitchellmudd',
  location: 'Holland MI, USA'
}
/* ======================
COMPONENTS
======================= */

function PageOne() {
  return (
    <main className={styles.resumeContainerPage1}>
      <h1>Page One</h1>
    </main>
  )
}

function PageTwo() {
  return (
    <main className={styles.resumeContainerPage2}>
      <h1>Page Two</h1>
    </main>
  )
}

export default function Resume() {
  return (
    <main>
      <h1>Resume</h1>
      <p>This page is meant to show off my actual resume :) The size of the resume is equivalent to an 8.5" x 11" paper and will not resize.</p>
      <PageOne />
      <PageTwo />
    </main>
  )
}