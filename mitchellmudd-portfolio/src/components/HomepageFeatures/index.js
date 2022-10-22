import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'City Ranker',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This app was all about reinforcing what I learned from the React Beta Documentation. This project was inspired by my love of different cities and comparing them; However, I also thought this could be useful for ranking cities that I may want to move to in the future! I didn't expect to add a backend to this, but found that it was necessary to get one of my APIs to function properly. I'm very happy with the login system (thank you Supabase) and incredibly proud of this project!
      </>
    ),
  },
  {
    title: 'Windmill Weather',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Windmill weather is my first project that deals with the handling of APIs. Originally I only planned to use the OpenWeather API, but found that searching and hoping for a result was clunky. After learning that I implemented the TomTom fuzzy search and auto complete API with the search box package. I also tried parcel and tailwindcss for the first time in a project. This is my personal favorite project on my portfolio :)
      </>
    ),
  },
  {
    title: 'to.do',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This was my first project that felt like a true project. I've seen many variations of the todo list project and sought to go beyond the most basic functionality. Something I learned while doing this is the importance of planning how your app will function ahead of time and keeping your code base clean. I definitely cluttered everything up at the start and spent a good two to three hours reorganizing. After finishing this project I feel way more confident applying types using Typescript.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
