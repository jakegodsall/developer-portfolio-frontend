/* eslint-disable react/prop-types */
import styles from './Button.module.scss';

const Button = ({ destination, children }) => {
    return (
        <a href={destination} className={styles.button}>
            {children}
        </a>
    );
};

export default Button;
