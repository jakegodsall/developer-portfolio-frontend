import styles from './ProjectList.module.scss';

import ProjectItem from '../ProjectItem/ProjectItem';
import Button from '../../UI/Button/Button';

const ProjectList = () => {
    return (
        <div className={styles.projectList}>
            <div className={styles.projectList_headerBar}>
                <h2 className={styles.projectList_title}>Projects</h2>
                <Button>Contact me</Button>
            </div>
            <ProjectItem />
        </div>
    );
};

export default ProjectList;
