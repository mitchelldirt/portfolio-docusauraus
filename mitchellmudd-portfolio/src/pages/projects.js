import React, { useState } from 'react';
import Layout from '@theme/Layout';

import styles from './projects.module.css';
import TagList from '../components/HomepageFeatures/tagList';

const projects = [
  {
    title: 'Tasky',
    imageLink: 'https://picsum.photos/500/300',
    description: `This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case. <a href='https://mitchelldirt.github.io/todo-list/'>My first attempt</a> at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm very happy with the result!`,
    tags: ['Remix', 'SQLite', 'Typescript', 'Prisma', 'Vitest', 'Cypress', 'TailwindCSS'],
    githubLink: 'https://github.com/mitchelldirt/tasky',
    projectLink: 'https://tasky-remix.fly.dev/'
  },
  {
    title: 'City Ranker',
    imageLink: 'https://picsum.photos/200/300',
    description: `This app was all about reinforcing what I learned from the React Beta Documentation. The problem this app solves for me is my desire to rank cities that I may want to move to in the future! I didn't expect to add a backend to this, but found that it was necessary to get one of my APIs to function properly. Initially I used express, but then refactored it all to Next.JS so I wouldn't have to worry about getting a bill from Google Cloud. I'm very happy with the login system and incredibly proud of this project!`,
    tags: ['React', 'Next.JS', 'Serverless Functions', 'PostgreSQL', 'Supabase', 'Express.JS', 'Google Cloud'],
    githubLink: 'https://github.com/mitchelldirt/City-Ranker',
    projectLink: 'https://city-ranker-mitchelldirt.vercel.app/'
  },
  {
    title: 'Windmill Weather',
    imageLink: 'https://picsum.photos/200/300',
    description: `Windmill weather is my first project that deals with the handling of APIs. Originally I only planned to use the OpenWeather API, but found that searching and hoping for a result was clunky. After learning that I implemented the TomTom fuzzy search and auto complete API with the search box package. I also tried parcel and tailwindcss for the first time in a project. This is my personal favorite project on my portfolio :)`
    ,
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
    <Layout title={projects[currentProject].title + ' Project'} description={projects[currentProject].description}>
      <h1 className={styles.title}>{projects[currentProject].title}</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.mainContent}>
          <img src={projects[currentProject].imageLink} alt={projects[currentProject].title} />
          <p>{projects[currentProject].description}</p>
        </div>

        <div className={styles.tags}>
          <h2>Tech Stack</h2>
          <TagList className={styles.tags} tags={projects[currentProject].tags} />
        </div>
      </div>
      <div className={styles.projectLinks}>
        <button onClick={prevProject}>Previous</button>
        Project {currentProject + 1} of {length}
        <button onClick={nextProject}>Next</button>
      </div>
    </Layout>
  );
}