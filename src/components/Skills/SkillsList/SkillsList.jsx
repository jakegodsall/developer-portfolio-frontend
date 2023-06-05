import SkillsItem from '../SkillsItem/SkillsItem';

import styles from './SkillsList.module.scss';

const SKILLS = [
    {
        title: 'HTML',
        experience: '4 years',
    },
    {
        title: 'CSS',
        experience: '4 years',
    },
    {
        title: 'JavaScript',
        experience: '4 years',
    },
    {
        title: 'Accessibility',
        experience: '4 years',
    },
    {
        title: 'React',
        experience: '3 years',
    },
    {
        title: 'Sass',
        experience: '3 years',
    },
];

const SkillsList = () => {
    return (
        <>
            <div className={styles.skillsList}>
                {SKILLS.map((skill, key) => {
                    return (
                        <SkillsItem title={skill.title} experience={skill.experience} key={key} />
                    );
                })}
            </div>
        </>
    );
};

export default SkillsList;
