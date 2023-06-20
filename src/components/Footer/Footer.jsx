import styles from './Footer.module.scss';

import Header from '../Header/Header';
import Form from '../Form/Form';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_topRow}>
                <div className={styles.footer_textContent}>
                    <h2 className={styles.footer_title}>Contact</h2>
                    <p className={styles.footer_description}>
                        I would love to hear about your project and how I could help. Please fill in
                        the form, and I&apos;ll get back to you as soon as possible.
                    </p>
                </div>
                <Form />
            </div>
            <Header isFooter />
        </div>
    );
};

export default Footer;
