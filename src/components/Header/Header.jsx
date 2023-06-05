import styles from './Header.module.scss';

import GitHub from '../../assets/images/icon-github.svg';
import FrontendMentor from '../../assets/images/icon-frontend-mentor.svg';
import LinkedIn from '../../assets/images/icon-linkedin.svg';
import Twitter from '../../assets/images/icon-twitter.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <p className={styles.header_name}>adamkeyes</p>
            <div className={styles.header_socials}>
                {[GitHub, LinkedIn, FrontendMentor, Twitter].map((el, key) => {
                    return (
                        <a href='#/' key={key}>
                            <img className={styles.header_socialItem} src={el} alt='social logo' />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;
