import { motion } from 'framer-motion';

import styles from './ProjectFilterItem.module.scss';

const ProjectFilterItem = ({ removeSkill, filter }) => {
    const onClickHandler = (e) => {
        const skill = e.target.previousElementSibling.innerHTML;

        removeSkill(skill);
    };

    return (
        <motion.li
            layout
            className={styles.projectFilterItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <p className={styles.projectFilterItem_content}>{filter}</p>
            <p className={styles.projectFilterItem_button} onClick={onClickHandler}>
                X
            </p>
        </motion.li>
    );
};

export default ProjectFilterItem;
