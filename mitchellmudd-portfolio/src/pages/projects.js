import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import {clsx} from 'clsx';
import styles from './projects.module.css';
import taskyImg from '../../static/img/taskyImg.png'
import windmillWeatherImg from '../../static/img/windmillWeather2.png'
import cityRankerImg from '../../static/img/cityRankerImg.png'
import Project from '../components/HomepageFeatures/Project';
import Translate from '@docusaurus/Translate';

const projects = [
    {
        title: 'Tasky',
        imageLink: taskyImg,
        description: (
            <>
                <Translate id="taskyDescriptionPart1">
                    This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build
                    something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and
                    Remix is really well suited to this use case.
                </Translate>
                <a href='https://mitchelldirt.github.io/todo-list/'>
                    <Translate id="taskyDescriptionPart2">
                        My first attempt
                    </Translate>
                </a>
                <Translate id="taskyDescriptionPart3">
                    at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm
                    very happy with the result!
                </Translate>
            </>
        ),
        metaDescription: `This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case. <a href='https://mitchelldirt.github.io/todo-list/'>My first attempt</a> at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm very happy with the result!`,
        tags: ['Remix', 'SQLite', 'Typescript', 'Prisma', 'Vitest', 'Cypress', 'TailwindCSS'],
        githubLink: 'https://github.com/mitchelldirt/tasky',
        projectLink: 'https://tasky.mitchellmudd.dev/'
    },
    {
        title: 'City Ranker',
        imageLink: cityRankerImg,
        description: (
            <>
                <Translate id="cityRankerDescription">
                    This app was all about reinforcing what I learned from the React Beta Documentation. The problem
                    this app solves for me is my desire to rank cities that I may want to move to in the future! I
                    didn't expect to add a backend to this, but found that it was necessary to get one of my APIs to
                    function properly. Initially I used express, but then refactored it all to Next.JS so I wouldn't
                    have to worry about getting a bill from Google Cloud. I'm very happy with the login system and
                    incredibly proud of this project!
                </Translate>
            </>
        ),
        metaDescription: `This app was all about reinforcing what I learned from the React Beta Documentation. The problem this app solves for me is my desire to rank cities that I may want to move to in the future! I didn't expect to add a backend to this, but found that it was necessary to get one of my APIs to function properly. Initially I used express, but then refactored it all to Next.JS so I wouldn't have to worry about getting a bill from Google Cloud. I'm very happy with the login system and incredibly proud of this project!`,
        tags: ['React', 'Next.JS', 'Serverless Functions', 'PostgreSQL', 'Supabase', 'Express.JS', 'Google Cloud'],
        githubLink: 'https://github.com/mitchelldirt/City-Ranker',
        projectLink: 'https://city-ranker.mitchellmudd.dev'
    },
    {
        title: 'Windmill Weather',
        imageLink: windmillWeatherImg,
        description: (
            <>
                <Translate id="windmillWeatherDescription">
                    Windmill weather is my first project that deals with the handling of APIs. Originally I only planned
                    to use the OpenWeather API, but found that searching and hoping for a result was clunky. After
                    learning that I implemented the TomTom fuzzy search and auto complete API with the search box
                    package. I also tried parcel and tailwindcss for the first time in a project. This is my personal
                    favorite project on my portfolio!
                </Translate>
            </>
        ),
        metaDescription: `Windmill weather is my first project that deals with the handling of APIs. Originally I only planned to use the OpenWeather API, but found that searching and hoping for a result was clunky. After learning that I implemented the TomTom fuzzy search and auto complete API with the search box package. I also tried parcel and tailwindcss for the first time in a project. This is my personal favorite project on my portfolio!`,
        tags: ['Typescript', 'TailwindCSS', 'Parcel', 'OpenWeatherAPI', 'TomTomAPI'],
        githubLink: 'https://github.com/mitchelldirt/windmill-weather',
        projectLink: 'https://windmill-weather.mitchellmudd.dev'
    }
];

export default function Projects() {
    // Use projects array to display a project carousel

    const [currentProject, setCurrentProject] = useState(0);
    const length = projects.length;

    const nextProject = () => {
        window.scrollTo(0, 0);
        setCurrentProject(currentProject === length - 1 ? 0 : currentProject + 1);
    };

    const prevProject = () => {
        window.scrollTo(0, 0);
        setCurrentProject(currentProject === 0 ? length - 1 : currentProject - 1);
    };

    const setSpecificProject = (projectId) => {
        window.scrollTo(0, 0);
        setCurrentProject(projectId);
    }

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null;
    }

    useEffect(() => {
        // Get the current project number from the url query string
        const urlParams = new URLSearchParams(window.location.search);
        const projectNumber = urlParams.get('project');

        if (projectNumber) {
            setCurrentProject(parseInt(projectNumber));
        }
    }, []);


    return (
        <Layout title={projects[currentProject].title + ' Project'}
                description={projects[currentProject].metaDescription}>
            <Project project={projects[currentProject]} isFeatured={false}/>

            <div className={styles.projectLinks}>
                <button aria-label='Previous Project' onClick={prevProject}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className={styles.navButton}>
                        <path fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                              clipRule="evenodd"/>
                    </svg>
                </button>

                {
                    projects.map((project, index) => {
                        return (
                            <button key={index} onClick={() => setSpecificProject(index)} id={`project${index}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className={clsx(currentProject === index ? styles.selectedProjectNav : '', styles.navButton)}>
                                    <circle cx="12" cy="12" r="9.75"/>
                                    <text x={'50%'} y={'50%'} dominantBaseline="middle" textAnchor="middle" fill="white" className={clsx('text-white')}>{index + 1}</text>
                                </svg>

                            </button>
                        );
                    })
                }
                <button aria-label='Next Project' onClick={nextProject}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className={styles.navButton}>
                        <path fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                              clipRule="evenodd"/>
                    </svg>
                </button>

            </div>

        </Layout>
    );
}