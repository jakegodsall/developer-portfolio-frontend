import Button from '../UI/Button/Button';
import styles from './Hero.module.scss';

import ImageProfileDesktop from '../../assets/images/image-profile-desktop.webp';
import ImageProfileTablet from '../../assets/images/image-profile-tablet.webp';
import ImageProfileMobile from '../../assets/images/image-profile-mobile.webp';

import PatternRings from '../../assets/images/pattern-rings.svg';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <picture>
                <source media='(max-width: 600px)' srcSet={ImageProfileMobile} />
                <source media='(max-width: 1000px)' srcSet={ImageProfileTablet} />
                <img
                    src={ImageProfileDesktop}
                    alt='Adam Keyes photograph'
                    className={styles.hero_photo}
                />
            </picture>

            <img className={styles.hero_rings} src={PatternRings} alt='Background pattern' />
            <div className={styles.hero_textContent}>
                <h1 className={styles.hero_title}>
                    Nice to meet you! I&apos;m{' '}
                    <span className={styles.hero_titleSpan}>Adam Keyes</span>.
                </h1>
                <p className={styles.hero_description}>
                    Based in the UK, I&apos;m a front-end developer passionate about building
                    accessible web apps that users love.
                </p>
            </div>
            <Button destination='#/'>contact me</Button>
        </div>
    );
};

export default Hero;
