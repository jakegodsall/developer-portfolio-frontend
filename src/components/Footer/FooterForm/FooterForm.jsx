import styles from './FooterForm.module.scss';

import Button from '../../UI/Button/Button';

const FooterForm = () => {
    return (
        <form className={styles.footerForm}>
            <div className={styles.footerForm_row}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    className={styles.footerForm_input}
                />
            </div>
            <div className={styles.footerForm_row}>
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    className={styles.footerForm_input}
                />
            </div>
            <div className={styles.footerForm_row}>
                <textarea
                    name='message'
                    id='message'
                    cols='10'
                    rows='3'
                    placeholder='message'
                    className={styles.footerForm_input}
                ></textarea>
            </div>
            <div className={styles.footerForm_row}>
                <Button>send message</Button>
            </div>
        </form>
    );
};

export default FooterForm;
