import styles from './Footer.module.scss';

import FooterForm from './FooterForm/FooterForm';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <FooterForm />
        </div>
    );
};

export default Footer;
