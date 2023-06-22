import { AnimatePresence } from 'framer-motion';

import ProjectFilterItem from '../ProjectFilterItem/ProjectFilterItem';

import styles from './ProjectFilterBar.module.scss';

const ProjectFilterBar = ({ filters, removeSkill }) => {
    const removeSkillHandler = (skill) => {
        removeSkill(skill);
    };

    const filterBarStyles =
        filters.length > 0
            ? styles.projectFilterBar
            : `${styles.projectFilterBar} ${styles.projectFilterBar___hide}`;

    return (
        <div className={filterBarStyles}>
            <ul className={styles.projectFilterBar_list}>
                <AnimatePresence>
                    {filters.map((filter, key) => {
                        return (
                            <ProjectFilterItem
                                filter={filter}
                                removeSkill={removeSkillHandler}
                                key={key}
                            />
                        );
                    })}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default ProjectFilterBar;
