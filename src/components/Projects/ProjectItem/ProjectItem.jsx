import styles from './ProjectItem.module.scss';

import Button from '../../UI/Button/Button';

const ProjectItem = (props) => {
    console.log(props.project);
    return (
        <div className={styles.projectItem}>
            <div className={styles.projectItem_imageContainer}>
                <img className={styles.projectItem_image} src={props.project.smallImage} />
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
                            <li className={styles.projectItem_skillItem} key={id}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ProjectItem;
