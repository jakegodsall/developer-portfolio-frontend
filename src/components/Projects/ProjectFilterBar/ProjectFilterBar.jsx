import { motion, AnimatePresence } from 'framer-motion';

import ProjectFilterItem from '../ProjectFilterItem/ProjectFilterItem';

import styles from './ProjectFilterBar.module.scss';

const ProjectFilterBar = ({ filters, removeSkill }) => {
    const removeSkillHandler = (skill) => {
        removeSkill(skill);
    };

    return (
        <div className={styles.projectFilterBar}>
            <ul className={styles.projectFilterBar_list}>
                {filters.map((filter, key) => {
                    return (
                        <li className={styles.projectFilterBar_item} key={key}>
                            <ProjectFilterItem filter={filter} removeSkill={removeSkillHandler} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProjectFilterBar;
