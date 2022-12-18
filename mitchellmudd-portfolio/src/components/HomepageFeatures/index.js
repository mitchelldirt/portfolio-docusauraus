import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import cityRanker from '../../../static/img/city-ranker-screenshot.png'
import windMillWeather from '../../../static/img/windmill-weather-screenshot.png'
import todo from '../../../static/img/todo-screenshot.png'
import TagList from './tagList';
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const FeatureList = [
  {
    title: 'City Ranker',
    imageLink: cityRanker,
    description: (
      <>
        This app was all about reinforcing what I learned from the React Beta Documentation. The problem this app solves for me is my desire to rank cities that I may want to move to in the future! I didn't expect to add a backend to this, but found that it was necessary to get one of my APIs to function properly. Initially I used express, but then refactored it all to Next.JS so I wouldn't have to worry about getting a bill from Google Cloud. I'm very happy with the login system and incredibly proud of this project!
      </>
    ),
    tags: ['React', 'Next.JS', 'Serverless Functions', 'PostgreSQL', 'Supabase', 'Express.JS', 'Google Cloud'],
    githubLink: 'https://github.com/mitchelldirt/City-Ranker',
    projectLink: 'https://city-ranker-mitchelldirt.vercel.app/'
  },
  {
    title: 'Windmill Weather',
    imageLink: windMillWeather,
    description: (
      <>
        Windmill weather is my first project that deals with the handling of APIs. Originally I only planned to use the OpenWeather API, but found that searching and hoping for a result was clunky. After learning that I implemented the TomTom fuzzy search and auto complete API with the search box package. I also tried parcel and tailwindcss for the first time in a project. This is my personal favorite project on my portfolio :)
      </>
    ),
    tags: ['Typescript', 'TailwindCSS', 'Parcel', 'OpenWeatherAPI', 'TomTomAPI'],
    githubLink: 'https://github.com/mitchelldirt/windmill-weather',
    projectLink: 'https://windmill-weather-4sp3fyjf6-mitchelldirt.vercel.app/'
  },
  {
    title: 'to.do',
    imageLink: todo,
    description: (
      <>
        This was my first project that felt like a true project. I've seen many variations of the todo list project and sought to go beyond the most basic functionality. Something I learned while doing this is the importance of planning how your app will function ahead of time and keeping your code base clean. I definitely cluttered everything up at the start and spent a good two to three hours reorganizing. After finishing this project I feel way more confident applying types using Typescript.
      </>
    ),
    tags: ['Typescript', 'HTML', 'CSS', 'Webpack'],
    githubLink: 'https://github.com/mitchelldirt/todo-list',
    projectLink: 'https://mitchelldirt.github.io/todo-list/'
  },
];

function Feature({ imageLink, title, description, tags, githubLink, projectLink }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={imageLink} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <TagList tags={tags} />

        <br />

        <a
          target='_blank'
          href={githubLink}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>

        <a
          target='_blank'
          href={projectLink}
          aria-label='live preview'
          className={styles.linkIcon}
        >
          <LaunchIcon />
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <div className={styles.plugSkillsContainer}>
    

      <a href='https://mitchellmudd.dev/docs/Skills/My%20Favorite%20Tech%20Stack' className={styles.plugSkills}>Check out my skills!</a>
  </div>
  </>
  );
}
