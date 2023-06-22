import styles from './ProjectFilterItem.module.scss';

const ProjectFilterItem = ({ removeSkill, filter }) => {
    const onClickHandler = (e) => {
        const skill = e.target.previousElementSibling.innerHTML;

        removeSkill(skill);
    };

    return (
        <div className={styles.projectFilterItem}>
            <p className={styles.projectFilterItem_content}>{filter}</p>
            <p className={styles.projectFilterItem_button} onClick={onClickHandler}>
                X
            </p>
        </div>
    );
};

export default ProjectFilterItem;
