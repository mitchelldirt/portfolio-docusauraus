import React from "react";
import styles from "./project.module.css";
import TagList from "./tagList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Translate, { translate } from "@docusaurus/Translate";

export default function Project({ project, isFeatured }) {
    return (
        <>
            <h1 className={styles.title}>
                {isFeatured
                    ? translate({
                          message: "Featured Project: ",
                          id: "project.featuredProject.prefix",
                          description:
                              'Featured Project Prefix... literally just says "Featured Project:"',
                      })
                    : ""}
                {project.title}
            </h1>
            <div className={styles.projectsContainer}>
                <div className={styles.mainContent}>
                    <img src={project.imageLink} alt={project.title} />
                    <p>{project.description}</p>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.tags}>
                        <h2 className={styles.sidebarH2}>
                            <Translate id="project.techStack">
                                Tech Stack
                            </Translate>
                        </h2>
                        <TagList className={styles.tags} tags={project.tags} />
                    </div>

                    <div className={styles.links}>
                        <h2>
                            <Translate id="project.links">Links</Translate>
                        </h2>
                        <div className={styles.linkButtons}>
                            <a
                                target="_blank"
                                href={project.githubLink}
                                aria-label="source code"
                            >
                                <GitHubIcon
                                    className={styles.projectLinkIcon}
                                />
                            </a>

                            <a
                                target="_blank"
                                href={project.projectLink}
                                aria-label="Live Site"
                            >
                                <LaunchIcon
                                    className={styles.projectLinkIcon}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
