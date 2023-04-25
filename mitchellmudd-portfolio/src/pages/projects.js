import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import styles from './projects.module.css';
import TagList from '../components/HomepageFeatures/tagList';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import taskyImg from '../../static/img/taskyImg.png'
import windmillWeatherImg from '../../static/img/windmillWeather2.png'
import cityRankerImg from '../../static/img/cityRankerImg.png'

const projects = [
  {
    title: 'Tasky',
    imageLink: taskyImg,
    description: (
      <>
        This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case. <a href='https://mitchelldirt.github.io/todo-list/'>My first attempt</a> at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm very happy with the result!
      </>
    ),
    metaDescription: `This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case. <a href='https://mitchelldirt.github.io/todo-list/'>My first attempt</a> at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm very happy with the result!),
    metaDescription: 'This is the second todo list app that I\'ve created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case. My first attempt at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I\'m very happy with the result!`,
    tags: ['Remix', 'SQLite', 'Typescript', 'Prisma', 'Vitest', 'Cypress', 'TailwindCSS'],
    githubLink: 'https://github.com/mitchelldirt/tasky',
    projectLink: 'https://tasky-remix.fly.dev/'
  },
  {
    title: 'City Ranker',
    imageLink: cityRankerImg,
    description: (
      <>
        This app was all about reinforcing what I learned from the React Beta Documentation. The problem this app solves for me is my desire to rank cities that I may want to move to in the future! I didn't expect to add a backend to this, but found that it was necessary to get one of my APIs to function properly. Initially I used express, but then refactored it all to Next.JS so I wouldn't have to worry about getting a bill from Google Cloud. I'm very happy with the login system and incredibly proud of this project! </>
    ),
    metaDescription: `This app was all about reinforcing what I learned from the React Beta Documentation. The problem this app solves for me is my desire to rank cities that I may want to move to in the future! I didn't expect to add a backend to this, but found that it was necessary to get one of my APIs to function properly. Initially I used express, but then refactored it all to Next.JS so I wouldn't have to worry about getting a bill from Google Cloud. I'm very happy with the login system and incredibly proud of this project!`,
    tags: ['React', 'Next.JS', 'Serverless Functions', 'PostgreSQL', 'Supabase', 'Express.JS', 'Google Cloud'],
    githubLink: 'https://github.com/mitchelldirt/City-Ranker',
    projectLink: 'https://city-ranker-mitchelldirt.vercel.app/'
  },
  {
    title: 'Windmill Weather',
    imageLink: windmillWeatherImg,
    description: (
      <>
        Windmill weather is my first project that deals with the handling of APIs. Originally I only planned to use the OpenWeather API, but found that searching and hoping for a result was clunky. After learning that I implemented the TomTom fuzzy search and auto complete API with the search box package. I also tried parcel and tailwindcss for the first time in a project. This is my personal favorite project on my portfolio!
      </>
    ),
    metaDescription: `Windmill weather is my first project that deals with the handling of APIs. Originally I only planned to use the OpenWeather API, but found that searching and hoping for a result was clunky. After learning that I implemented the TomTom fuzzy search and auto complete API with the search box package. I also tried parcel and tailwindcss for the first time in a project. This is my personal favorite project on my portfolio!`,
    tags: ['Typescript', 'TailwindCSS', 'Parcel', 'OpenWeatherAPI', 'TomTomAPI'],
    githubLink: 'https://github.com/mitchelldirt/windmill-weather',
    projectLink: 'https://windmill-weather-4sp3fyjf6-mitchelldirt.vercel.app/'
  }
];

export default function Projects() {
  // Use projects array to display a project carousel

  const [currentProject, setCurrentProject] = useState(0);
  const length = projects.length;

  const nextProject = () => {
    setCurrentProject(currentProject === length - 1 ? 0 : currentProject + 1);
  };

  const prevProject = () => {
    setCurrentProject(currentProject === 0 ? length - 1 : currentProject - 1);
  };

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }


  return (
    <Layout title={projects[currentProject].title + ' Project'} description={projects[currentProject].metaDescription}>
      <h1 className={styles.title}>{projects[currentProject].title}</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.mainContent}>
          <img src={projects[currentProject].imageLink} alt={projects[currentProject].title} />
          <p>{projects[currentProject].description}</p>
        </div>


        <div className={styles.sidebar}>
          <div className={styles.tags}>
            <h2 className={styles.sidebarH2}>Tech Stack</h2>
            <TagList className={styles.tags} tags={projects[currentProject].tags} />
          </div>

          <div className={styles.links}>
            <h2>Links</h2>
            <div className={styles.linkButtons}>
              <a
                target='_blank'
                href={projects[currentProject].githubLink}
                aria-label='source code'
              >
                <GitHubIcon className={styles.projectLinkIcon} />
              </a>

              <a
                target='_blank'
                href={projects[currentProject].projectLink}
                aria-label='Live Site'
              >
                <LaunchIcon className={styles.projectLinkIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectLinks}>
        <button onClick={prevProject}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.navButton}>
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
          </svg>
        </button>
        <svg id='project0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx(currentProject === 0 ? styles.selectedProjectNav : '', styles.navButton)}>
          <circle cx="12" cy="12" r="9.75" />
        </svg>
        <svg id='project1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx(currentProject === 1 ? styles.selectedProjectNav : '', styles.navButton)}>
          <circle cx="12" cy="12" r="9.75" />
        </svg>
        <svg id='project2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx(currentProject === 2 ? styles.selectedProjectNav : '', styles.navButton)}>
          <circle cx="12" cy="12" r="9.75" />
        </svg>
        <button onClick={nextProject}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.navButton}>
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
        </svg>
        </button>
      </div>

    </Layout>
  );
}