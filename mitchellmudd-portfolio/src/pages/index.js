import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CallToActionGroup from '../components/HomepageFeatures/CallToAction';
import styles from './index.module.css';
import Project from '../components/HomepageFeatures/Project';
import taskyImg from '../../static/img/taskyImg.png';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="indexTitle">Hello, I'm Mitchell Mudd</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="indexSubtitle">A Software Developer :)</Translate>
        </p>
        <p><Translate id="indexIntroduction">I'm currently living in the United States. I love the outdoors so you'll usually find me rock climbing, biking, or walking with my dog! I love continuing to learn by building side projects and exploring new (to me) technologies. Please feel free to reach out to me!</Translate></p>
      </div>
    </header>
  );
}

const featuredProject = {
  title: 'Tasky',
  imageLink: taskyImg,
  description: (
    <>
      <Translate id="featuredProjectDescriptionPart1">
        This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case.
      </Translate>
      <a href='https://mitchelldirt.github.io/todo-list/'>
        <Translate id="featuredProjectDescriptionPart2">
          My first attempt
        </Translate>
      </a>
      <Translate id="featuredProjectDescriptionPart3">
        at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm very happy with the result!
      </Translate>
    </>
  ),
  metaDescription: `This is the second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. Making a todo list app is a great way to learn a new stack, and Remix is really well suited to this use case. <a href='https://mitchelldirt.github.io/todo-list/'>My first attempt</a> at a todo list app was when I first learned Javascript so I really wanted to improve upon that. I'm very happy with the result!`,
  tags: ['Remix', 'SQLite', 'Typescript', 'Prisma', 'Vitest', 'Cypress', 'TailwindCSS'],
  githubLink: 'https://github.com/mitchelldirt/tasky',
  projectLink: 'https://tasky-remix.fly.dev/'
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio`}
      description="Come learn about my developer journey!">
      <HomepageHeader />
      <main>
        <Project project={featuredProject} isFeatured={true} />
        <CallToActionGroup />
      </main>
    </Layout>
  );
}
