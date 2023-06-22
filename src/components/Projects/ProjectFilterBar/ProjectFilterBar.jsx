import styles from './ProjectFilterBar.module.scss';

const ProjectFilterBar = ({ filters, removeSkill }) => {
    const onClickHandler = (e) => {
        const skill = e.target.previousElementSibling.innerHTML;

        removeSkill(skill);
    };

    return (
        <div className={styles.projectFilterBar}>
            <ul className={styles.projectFilterBar_list}>
                {filters.map((filter, key) => {
                    return (
                        <li className={styles.projectFilterBar_item} key={key}>
                            <p className={styles.projectFilterBar_content}>{filter}</p>
                            <p className={styles.projectFilterBar_button} onClick={onClickHandler}>
                                X
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProjectFilterBar;
