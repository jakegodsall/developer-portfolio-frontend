import Button from '../UI/Button/Button';

import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__textContent}>
                <h1 className={styles.hero__title}>Nice to meet you! I`m Adam Keynes</h1>
                <p className={styles.hero__description}>
                    Based in the UK, I’m a front-end developer passionate about building accessible
                    web apps that users love.
                </p>
                <Button>contact me</Button>
            </div>
        </div>
    );
};

export default Hero;
