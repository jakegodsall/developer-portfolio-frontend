import styles from './SkillsItem.module.scss';

// eslint-disable-next-line react/prop-types
const SkillsItem = ({ title, experience }) => {
    return (
        <div className={styles.skillsItem}>
            <h2 className={styles.skillsItem__title}>{title}</h2>
            <p className={styles.skillsItem__experience}>{experience} experience</p>
        </div>
    );
};

export default SkillsItem;
