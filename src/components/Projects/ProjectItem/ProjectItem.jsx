import { motion } from 'framer-motion';

import styles from './ProjectItem.module.scss';

import Button from '../../UI/Button/Button';

const ProjectItem = (props) => {
    const onClickHandler = (e) => {
        const skill = e.target.innerHTML;

        props.getSkill(skill);
    };

    return (
        <motion.li
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={styles.projectItem}
        >
            <div className={styles.projectItem_imageContainer}>
                <img
                    className={styles.projectItem_image}
                    src={props.project.smallImage}
                    loading='lazy'
                />
                <div className={styles.projectItem_imageOverlay}>
                    <Button destination={props.project.liveURL}>View project</Button>
                    <Button destination={props.project.githubURL}>View code</Button>
                </div>
            </div>
            <div className={styles.projectItem_textContent}>
                <h3 className={styles.projectItem_title}>{props.project.name}</h3>
                <ul className={styles.projectItem_skillList}>
                    {props.project.skills.map((skill, id) => {
                        return (
                            <li
                                className={styles.projectItem_skillItem}
                                key={id}
                                onClick={onClickHandler}
                            >
                                {skill}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.li>
    );
};

export default ProjectItem;
