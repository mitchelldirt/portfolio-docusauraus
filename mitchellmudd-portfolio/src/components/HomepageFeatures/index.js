import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import cityRanker from '../../../static/img/cityRanker2.png'
import windMillWeather from '../../../static/img/windmill Weather.png'
import taskyImg from '../../../static/img/Tasky.png'
import TagList from './tagList';
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const FeatureList = [
  {
    title: 'Tasky',
    imageLink: taskyImg,
    description: (
      <>
        This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case. <a href='https://mitchelldirt.github.io/todo-list/'>My first attempt</a> at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm very happy with the result! 
      </>
    ),
    tags: ['Remix', 'SQLite', 'Typescript', 'Prisma', 'Vitest', 'Cypress', 'TailwindCSS'],
    githubLink: 'https://github.com/mitchelldirt/tasky',
    projectLink: 'https://tasky-remix.fly.dev/'
  },
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
  }
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
    

      <a href='https://mitchellmudd.dev/docs/Skills/My-Favorite-Tech-Stack' className={styles.plugSkills}>Check out my skills!</a>
  </div>
  </>
  );
}
