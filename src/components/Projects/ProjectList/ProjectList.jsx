import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import styles from './ProjectList.module.scss';

import ProjectFilterBar from '../ProjectFilterBar/ProjectFilterBar';
import ProjectItem from '../ProjectItem/ProjectItem';
import Button from '../../UI/Button/Button';

import ProjectOneSmall from '../../../assets/images/thumbnail-project-1-small.webp';
import ProjectTwoSmall from '../../../assets/images/thumbnail-project-2-small.webp';
import ProjectThreeSmall from '../../../assets/images/thumbnail-project-3-small.webp';
import ProjectFourSmall from '../../../assets/images/thumbnail-project-4-small.webp';
import ProjectFiveSmall from '../../../assets/images/thumbnail-project-5-small.webp';
import ProjectSixSmall from '../../../assets/images/thumbnail-project-6-small.webp';

import ProjectOneLarge from '../../../assets/images/thumbnail-project-1-large.webp';
import ProjectTwoLarge from '../../../assets/images/thumbnail-project-2-large.webp';
import ProjectThreeLarge from '../../../assets/images/thumbnail-project-3-large.webp';
import ProjectFourLarge from '../../../assets/images/thumbnail-project-4-large.webp';
import ProjectFiveLarge from '../../../assets/images/thumbnail-project-5-large.webp';
import ProjectSixLarge from '../../../assets/images/thumbnail-project-6-large.webp';

const PROJECTS = [
    {
        name: 'design portfolio',
        smallImage: ProjectOneSmall,
        largeImage: ProjectOneLarge,
        liveURL: '#/',
        githubURL: '#/',
        skills: ['html', 'css'],
    },
    {
        name: 'e-learning landing page',
        smallImage: ProjectTwoSmall,
        largeImage: ProjectTwoLarge,
        liveURL: '#/',
        githubURL: '#/',
        skills: ['html', 'css'],
    },
    {
        name: 'todo web app',
        smallImage: ProjectThreeSmall,
        largeImage: ProjectThreeLarge,
        liveURL: '#/',
        githubURL: '#/',
        skills: ['html', 'css', 'javascript'],
    },
    {
        name: 'entertainment web app',
        smallImage: ProjectFourSmall,
        largeImage: ProjectFourLarge,
        liveURL: '#/',
        githubURL: '#/',
        skills: ['html', 'css', 'javascript'],
    },
    {
        name: 'memory game',
        smallImage: ProjectFiveSmall,
        largeImage: ProjectFiveLarge,
        liveURL: '#/',
        githubURL: '#/',
        skills: ['html', 'css', 'javascript'],
    },
    {
        name: 'art gallery showcase',
        smallImage: ProjectSixSmall,
        largeImage: ProjectSixLarge,
        liveURL: '#/',
        githubURL: '#/',
        skills: ['html', 'css', 'javascript'],
    },
];

const testProject = (filterList, skillList) => {
    let result = false;
    filterList.forEach((filter) => {
        skillList.some((skill) => {
            if (skill === filter) {
                result = true;
            }
        });
    });

    return result;
};

const ProjectList = () => {
    const [filters, setFilters] = useState([]);
    const [projects, setProjects] = useState(PROJECTS);

    const getSkillHandler = (skill) => {
        console.log(filters);

        if (!filters.includes(skill)) {
            setFilters((prevState) => {
                return [...prevState, skill];
            });
        }

        setProjects((projects) => {
            const filteredProjects = projects.filter((project) => {
                const skills = project.skills;

                let result = false;

                filters.forEach((filter) => {
                    console.log('filter', filter);
                    skills.some((skill) => {
                        console.log('skill', skill);
                        if (skill === filter) {
                            result = true;
                        }
                    });
                });

                console.log(result);

                if (result === true) {
                    return project;
                }
            });

            console.log(filteredProjects);

            return filteredProjects;
        });
    };

    const removeSkillHandler = (skill) => {
        if (filters.includes(skill)) {
            setFilters((prevState) => {
                return prevState.filter((item) => {
                    return item !== skill;
                });
            });
        }

        setProjects((projects) => {
            const filteredProjects = projects.filter((project) => {
                console.log(
                    'project: ',
                    project.skills,
                    ' result: ',
                    testProject(filters, project.skills)
                );
                return testProject(filters, project.skills);
            });

            console.log(filteredProjects);

            return filteredProjects;
        });
    };

    return (
        <div className={styles.projectList}>
            <div className={styles.projectList_headerBar}>
                <h2 className={styles.projectList_title}>Projects</h2>
                <Button>Contact me</Button>
            </div>
            <ProjectFilterBar filters={filters} removeSkill={removeSkillHandler} />

            <ul className={styles.projectList_list}>
                <AnimatePresence>
                    {projects.map((project, id) => {
                        return (
                            <ProjectItem project={project} key={id} getSkill={getSkillHandler} />
                        );
                    })}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default ProjectList;
